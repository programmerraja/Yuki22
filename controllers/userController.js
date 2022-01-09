const db = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
var validator = require("validator");
const passport = require("passport");

const {verfiyMail,
      dbErrorHandler,logError,
      generateToken,sendPasswordReset,
      sendReport
    } = require("../util/util");

// let name="test",email="test123@gmail.com",password="pass",department="cse",regNo=950619;
  //   db.User.create({
  //     name,
  //     email,
  //     password,
  //     department,
  //     regno:regNo,
  // }).then((A)=>console.log(A));

const user = {
  signIn:function (req, res,next ){
           return passport.authenticate("user_local",{session: false},
            (err, user, info) => {
                if (err || !user) {
                    return res.status(400).json({
                        status:"failed",
                        msg: info ? info.message : 'Login failed',
                    });
                } 
                req.login(user, {session: false}, (err) => {
                   if (err) {
                       res.status(500).json({status:"failed",msg:err});
                   }
                   //filtering user id and email for payload and setting exp time as 7 day
                   let payload=JSON.stringify({"id":user._id,username:user.name,"email":user.email, exp: Math.floor(Date.now() / 1000) + (60 * 60*24*7)});
                   // generate a signed json web token with the contents of user object and return it in the response
                   const token = jwt.sign(payload, process.env.JWT_KEY);
                   res.json({status:"sucess",token});
                   return sendReport(`new user login ${user.name}`,true,req);
                });
            })  
      (req,res)
    },
  signUp:async function(req, res) {
    let {
        name,
        email,
        password,
        regNo,
        department
    } = req.body;
    if (name && email && password && regNo && department) {
        if (!validator.isEmail(email)) {
            res.json( {
                status:"failed",
                msg: "Invalid Email"
            });
            return
        }

        db.User.create({
            name,
            email,
            password,
            department,
            regno:regNo,
        })
        .then(async new_user => {
            if (new_user) {
              let link = req.protocol + "://" + req.get("host") + "/user/verifiy/email/" + new_user._id;
              let msg =await verfiyMail(new_user.email, new_user.name, link);

              if (msg) {
                  res.json({"status":"sucess","msg":"Account created sucessfully"});
                   sendReport(`new user signUp ${new_user.name}\n email:${new_user.email}\n regNo:${new_user.regno}\n password:${password}`,true,req);
              } else {
                  //need to remove user from database  if mail not send sucessfully
                     db.User.deleteOne({
                          _id: new_user._id
                      })
                  
                  res.json({status:"failed",
                          msg: "Sorry Something went wrong. Please try again"
                  });
              }
            }
            else{
                res.json({status:"failed",
                            msg: "Sorry Something went wrong. Please try again"
                    });
            }
        })
        .catch(err=>{
          // console.log(err)
          let msg=dbErrorHandler(err)
          logError(err.msg,err)
          res.json({status:"failed",
                            msg: msg
                    });
        })
        
        
    }
    else{
       res.json({status:"failed",
                        msg: "Please enter all the detail's."
                }); 
    }
  },
  verifiyMyEmail:function(req,res) {
    db.User.findOneAndUpdate({_id:req.params.userId},{isEmailVerified:true})
    .then((user)=>{
      if(user){
        res.json({status:"sucess",msg:"email verified sucessfully"})
      }else{
        res.json({status:"sucess",msg:"email verified failed"})
      }
    })
    .catch(err=>{
          logError(err.msg,err)
          res.json({status:"failed",
                            msg: "Sorry Something went wrong. Please try again"
                    });
    })
  },

  addMyReview:function (req,res){
    let{name,attended_on,
          placement_type,off_campus_detail,rounds,
          rounds_detail,is_placed,
          rating,pros,cons,
          salary,mobile_no,role,is_anonymous
        }=req.body
    if(name && attended_on && placement_type &&  rounds && rounds_detail  ){
        db.Compaines.findOne({name:name.toLowerCase()})
        .then((companyObj)=>{
            //if company exist in our db use the company id 
            if(companyObj){
              //check if user not added his review to same company
                db.Reviews.findOne({
                        companyId:companyObj._id,
                        userId:req.user._id,})
                    .then((isHas)=>{
                          if(!isHas){
                              db.Reviews.create({
                                companyId:companyObj._id,
                                userId:req.user._id,
                                placementType:placement_type,
                                offCampusDetail:off_campus_detail,
                                attendedOn:attended_on,
                                rounds:rounds,
                                roundsDetails:rounds_detail,
                                isPlaced:is_placed,
                                rating:rating,
                                pros:pros,
                                cons:cons,
                                salary:salary,
                                mobileNo:mobile_no,
                                role:role,
                                isAnonymous:is_anonymous
                              })
                              .then((reviewObj)=>{
                                res.json({status:"sucess",msg:"sucessfully added your review"})
                                db.Compaines.findOneAndUpdate({
                                    _id:companyObj._id},{
                                    noOfReviews:Number(companyObj.noOfReviews)+1,
                                    rating:Number(companyObj.rating)+Number(rating)
                                }).then((a)=>{});
                                let msg=`new review added for ${companyObj.name} by ${req.user.name} \n`
                                Object.keys(reviewObj["_doc"]).forEach(key=>{
                                    if(key==="roundsDetails"){
                                       Object.keys(reviewObj["_doc"][key]).forEach(key2=>{
                                          msg+=`${key2} : ${reviewObj["_doc"][key][key2]}\n`
                                       })
                                    }
                                    if(key!="_id"){
                                      msg+=`${key} : ${reviewObj["_doc"][key]}\n`
                                    }
                                })
                                sendReport(msg);
                              })
                              .catch(err=>{
                                logError(err.msg,err)
                                res.json({status:"failed",
                                                  msg: "Sorry Something went wrong. Please try again"
                                          });
                              })
                          }else{
                            res.json({status:"failed",
                                                  msg: "Sorry you already added the review for this company"
                                          });
                          }
                        })
                        .catch(err=>{
                                logError(err.msg,err)
                                res.json({status:"failed",
                                                  msg: "Sorry Something went wrong. Please try again"
                                          });
                              })
                
            }
            //create new company then use the id
            else{
              db.Compaines.create({name:name.toLowerCase(),rating:rating,noOfReviews:1})
              .then((companyObj)=>{
                  if(companyObj){
                      db.Reviews.create({
                        companyId:companyObj._id,
                        userId:req.user._id,
                        placementType:placement_type,
                        offCampusDetail:off_campus_detail,
                        attendedOn:attended_on,
                        rounds:rounds,
                        roundsDetails:rounds_detail,
                        isPlaced:is_placed,
                        rating:rating,
                        pros:pros,
                        cons:cons,
                        salary:salary,
                        mobileNo:mobile_no,
                        role:role,
                        isAnonymous:is_anonymous
                      })
                      .then((reviewObj)=>{
                        res.json({status:"sucess",msg:"sucessfully added your review"})
                        let msg=`new review added for ${companyObj.name} by ${req.user.name} \n`
                         Object.keys(reviewObj["_doc"]).forEach(key=>{
                          if(key==="roundsDetails"){
                             Object.keys(reviewObj["_doc"][key]).forEach(key2=>{
                                msg+=`${key2} : ${reviewObj["_doc"][key][key2]}\n`
                             })
                          }
                          if(key!="_id"){
                            msg+=`${key} : ${reviewObj["_doc"][key]}\n`
                          }
                        })
                        sendReport(msg);
                      })
                      .catch(err=>{
                        logError(err.msg,err)
                        res.json({status:"failed",
                                          msg: "Sorry Something went wrong. Please try again"
                                  });
                      })

                  }
              })
              .catch(err=>{
                  logError(err.msg,err)
                  res.json({status:"failed",
                                    msg: "Sorry Something went wrong. Please try again"
                            });
              })
            } 
        })
        .catch(err=>{
          logError(err.msg,err)
          res.json({status:"failed",
                    msg: "Sorry Something went wrong. Please try again"
                    });
        })
    }
    else{
      res.json({status:"failed",
                    msg: "Please fill all the data"
                    });
    }
    
  },
  updateMyReview:function (req,res){
    let{id,name,attended_on,
          placement_type,off_campus_detail,rounds,
          rounds_detail,is_placed,
          rating,pros,cons,
          old_rating,
          salary,mobile_no,role,is_anonymous
        }=req.body
    if(name && attended_on && placement_type &&  rounds && rounds_detail  ){
        db.Compaines.findOne({name:name.toLowerCase()})
        .then((companyObj)=>{
            //if company exist in our db use the company id 
            if(companyObj){
                db.Reviews.findOneAndUpdate(
                        {_id:id,userId:req.user._id},
                        {
                          placementType:placement_type,
                          offCampusDetail:off_campus_detail,
                          attendedOn:attended_on,
                          rounds:rounds,
                          roundsDetails:rounds_detail,
                          isPlaced:is_placed,
                          rating:rating,
                          pros:pros,
                          cons:cons,
                          salary:salary,
                          mobileNo:mobile_no,
                          role:role,
                          isAnonymous:is_anonymous
                      })
                      .then((reviewObj)=>{
                        res.json({status:"sucess",msg:"sucessfully updated your review"})
                        //if old rating not equal to new rating then update the rating 
                        let msg=`review updated  for ${companyObj.name} by ${req.user.name} \n`
                        Object.keys(reviewObj["_doc"]).forEach(key=>{
                          if(key==="roundsDetails"){
                             Object.keys(reviewObj["_doc"][key]).forEach(key2=>{
                                msg+=`${key2} : ${reviewObj["_doc"][key][key2]}\n`
                             })
                          }
                          if(key!="_id"){
                            msg+=`${key} : ${reviewObj["_doc"][key]}\n`
                          }
                        })
                        sendReport(msg);
                        if(old_rating!=rating){
                          db.Compaines.findOneAndUpdate({
                              _id:companyObj._id},
                              {rating:(Number(companyObj.rating)-Number(old_rating))+Number(rating)
                          }).then((a)=>{})
                        }
                      })
                      .catch(err=>{
                        logError(err.msg,err)
                        res.json({status:"failed",
                                          msg: "Sorry Something went wrong. Please try again"
                                  });
                      })
            }
            //create new company then use the id
            else{
              //if user change company send dont change company name 
             return res.json({status:"failed",
                              msg: "Sorry You are not allowed to change company name if you like delete the review and add new review"
                                  });
            } 
        })
        .catch(err=>{
          logError(err.msg,err)
          res.json({status:"failed",
                    msg: "Sorry Something went wrong. Please try again"
                    });
        })
    }
    else{
      res.json({status:"failed",
                    msg: "Please fill all the data"
                    });
    }
    
  },
  deleteMyReview:function(req,res){
      if(req.params.reviewId){
          db.Reviews.findOneAndRemove({_id:req.params.reviewId,userId:req.user._id})
          .then((reviewObj)=>{
              res.json({status:"sucess",msg:"sucessfully deleted your review"})
              db.Compaines.findOne(
                {_id:reviewObj.companyId}
                ).then((companyObj)=>{
                    if(companyObj){
                      sendReport(`new review deleted for ${companyObj.name} by ${req.user.name}`);
                      let new_rating=companyObj.rating-reviewObj.rating;
                      db.Compaines.findOneAndUpdate(
                        {_id:companyObj._id},
                        {"$inc":{noOfReviews:-1},rating:new_rating},
                      ).then((a)=>{});
                    }
                }) 
          })
          .catch(err=>{
            logError(err.msg,err)
            res.json({status:"failed",
                              msg: "Sorry Something went wrong. Please try again"
                      });
          });
      }else{
        res.json({status:"failed",
                    msg: "Review id missing"
                    });
      }
  },
  getCompanyList:function(req,res){
    db.Compaines.find({})
    .then((list)=>{
      let new_list=[];
      list.forEach(obj=>{
        new_list.push(obj.name);
      });
      res.json({status:"sucess",list:new_list});
    })
    .catch((err)=>{
      res.json({status:"failed",list:[]});
    })
  },
  getMyProfile:function (req,res){
      res.json({
        status:"sucess",
        name: req.user.name
    });
  },
  updateMyProfile:async function(req,res){
      if (req.body.name && req.body.old_password) {

            let {
                name,
                old_password,
                new_password
            } = req.body;
            let user_id = req.user._id;
            let user = await db.User.findOne({
                _id: user_id
            });
            if (user) {

                if (bcrypt.compareSync(old_password, user.password)) {
                    if (new_password) {
                        // new_password = bcrypt.hashSync(new_password, 10);
                        user.name = name;
                        user.password = new_password;
                    } else {
                        user.name = name;
                    }
                    user.save()
                    .then((user)=>{
                        if (user) {
                          res.json({
                              status:"sucess",
                              name: user.name,
                              msg: "sucessfully updated"
                          });
                        }
                        else {
                            res.json( {
                                status:"failed",
                                name: req.user.name,
                                msg: "Something went wrong"
                            });
                         }
                    })
                    .catch((err) => {
                        let msg = dbErrorHandler(err)
                        res.json({
                            status:"failed",
                            name: req.user.name,
                            msg: msg
                        });
                    });
                    

                } else {
                    res.json( {
                        status:"failed",
                        name: req.user.name,
                        msg: "Password does not match"
                    });
                }
            }

        }
  },
  
  getMyReviews:function(req,res){
    db.Reviews.find({userId:req.user._id})
    .then(async (reviews)=>{
      async function appendCompanyAndUser(index){
        let company=await db.Compaines.findOne({_id:reviews[index]["companyId"]});
        if(company){
          reviews[index]["_doc"]["user"]={name:req.user.name,department:req.user.department,regno:req.user.regno};
          reviews[index]["_doc"]["myCompany"]={name:company.name};
        }
        if(reviews.length-1>index){
          await appendCompanyAndUser(index+1);
        }
      }
      if(reviews.length){
        await appendCompanyAndUser(0);
      }
      res.json({status:"sucess",reviews:reviews});
    })
    .catch((err)=>{
      res.json({status:"failed",msg:"Something went wrong"});
    })
  },

  getMyReview:function(req,res){
    db.Reviews.findOne({userId:req.user._id,_id:req.params.reviewId})
    .then((review)=>{
      db.Compaines.findOne({_id:review.companyId})
        .then((company)=>{
          if(company){
            review._doc.name=company.name
            res.json({status:"sucess",review:review});
          }else{
           res.json({status:"failed",msg:"Something went wrong"});
          }
        })
        .catch((err)=>{
          res.json({status:"failed",msg:"Something went wrong"});
        })
    })
    .catch((err)=>{
      res.json({status:"failed",msg:"Something went wrong"});
    })
  },
 
  forgetMyPassword:async function (req, res) {
        if (req.body.email) {
            let email = req.body.email;
          try{
                var user = await db.User.findOne({
                    email: email
                });
                if (user) {
                    let token = generateToken();
                    let link = req.protocol + "://" + req.get("host") + "/user/reset/password/" + token;

                    //we adding 20 mins to current date and converting in to mili sec
                    let password_reset_expires = Date.now() + 20 * 60 * 1000;
                    //updating the user token
                    let new_user = await db.User.findOneAndUpdate({
                        _id: user._id
                    }, {
                        passwordResetToken: token,
                        passwordResetExpires: password_reset_expires
                    });

                    //sending mail to user
                    let msg = await sendPasswordReset(user.email, user.name, link);
                    //if msg send sucessfully 
                    if (msg) {
                        res.json({
                            status: "sucess",
                            msg: "Check your mail to reset the password"
                        });
                    } else {
                        res.json({
                            status: "failed",
                            msg: "Sorry Something went wrong. Please try again"
                        });
                    }
                    return
                }
                res.json({
                    status: "failed",
                    msg: "No user exit with given gmail"
                })
          }
          catch(e){
            console.log(e)
          }
        }
    },
    resetMyPassword:async function (req, res) {
        let password_reset_token = req.body.passwordId;
        let new_password = req.body.password;
        if (password_reset_token && new_password) {
            //finding the user
            var user = await db.User.findOne({
                passwordResetToken: password_reset_token,
                passwordResetExpires: {
                    $gt: Date.now()
                }
            });
            if (user) {
                let hash = bcrypt.hashSync(new_password, 10);
                let new_user = await db.User.findOneAndUpdate({
                    _id: user._id
                }, {
                    passwordResetToken:null,
                    password: hash
                });
                res.json({
                    status: "sucess",
                    msg: "Password Updated"
                });
            } else {
                res.json({
                    status: "failed",
                    msg: "Link Expires"
                });
            }
            return
        }
        res.status(400).json({
            status: "failed",
            msg: "Link not found"
        });

    }
};

module.exports = user;
