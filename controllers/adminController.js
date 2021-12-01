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

const admin = {
  signIn:function (req, res,next ){
           return passport.authenticate("admin_local",{session: false},
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
                   sendReport(`new user login ${user.name}`);
                   //filtering user id and email for payload and setting exp time as 7 day
                   let payload=JSON.stringify({"id":user._id,username:user.username,"email":user.email, exp: Math.floor(Date.now() / 1000) + (60 * 60*24*7)});
                   // generate a signed son web token with the contents of user object and return it in the response
                   const token = jwt.sign(payload, process.env.JWT_KEY);
                   return res.json({status:"sucess",token});
                });
            })  
      (req,res)
    },
    getCounts:function (req, res) {
        db.User.countDocuments({})
              .then((user_count) => {
                   db.Compaines.countDocuments({})
                        .then((company_count) => {
                             db.Reviews.countDocuments({})
                                    .then((review_count) => {
                                        res.json({
                                          status:"sucess",
                                          user_count,
                                          company_count,
                                          review_count
                                        })
                                    })
                                    .catch((err) => {
                                      res.send(500).json({status: "failure",message: "Some Error Occured. Try Again!"}) 
                                    })

                        })
                        .catch((err) => {
                          res.send(500).json({status: "failure",message: "Some Error Occured. Try Again!"}) 
                        })
              })
              .catch((err) => {
                res.send(500).json({status: "failure",message: "Some Error Occured. Try Again!"}) 
              })  
    },
   getAllUsers: function (req, res) {
    let limit = Number(req.query.limit) || 10;
    let skip = req.query.page > 1 ? Number((req.query.page - 1) * limit) : 0;
    db.User.find() 
      .skip(skip)
      .limit(limit)
      .then((users) => {
          db.User.countDocuments({})
              .then((count) => {
                 res.json({
                    users: users,
                    count:count
                  });
              })
              .catch((err) => {
                console.log(err);
                res.send(500).json({status: "failure",message: "Some Error Occured. Try Again!"}) 
              })  
      })
      .catch((err) => {
        console.log(err);
        res.send(500).json({
          status: "failure",
          message: "Some Error Occured. Try Again!",
        });
      });
  },
  updateUserReview:function (req,res){
    let{id,name,attended_on,
          placement_type,rounds,
          rounds_detail,is_placed,
          rating,pros,cons,
          old_rating,
          salary,mobile_no
        }=req.body
    if(name && attended_on && placement_type &&  rounds && rounds_detail  ){
        db.Compaines.findOne({name:name.toLowerCase()})
        .then((companyObj)=>{
            //if company exist in our db use the company id 
            if(companyObj){
                db.Reviews.findOneAndUpdate(
                        {_id:id},
                        {
                          placementType:placement_type,
                          attendedOn:attended_on,
                          rounds:rounds,
                          roundsDetails:rounds_detail,
                          isPlaced:is_placed,
                          rating:rating,
                          pros:pros,
                          cons:cons,
                          salary:salary,
                          mobileNo:mobile_no,
                      })
                      .then((reviewObj)=>{
                        res.json({status:"sucess",msg:"sucessfully updated your review"})
                        sendReport(`review updated for ${companyObj.name} by admin ${JSON.stringify(reviewObj)}`);
                        //if old rating not equal to new rating then update the rating 
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
  deleteUserReview:function(req,res){
      if(req.params.reviewId){
          db.Reviews.findOneAndRemove({_id:req.params.reviewId})
          .then((reviewObj)=>{
              res.json({status:"sucess",msg:"sucessfully deleted your review"})
              db.Compaines.findOne(
                {_id:reviewObj.companyId}
                ).then((companyObj)=>{
                    if(companyObj){
                      sendReport(`new review deleted for ${companyObj.name} by admin`);
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
  deleteUser:function(req,res){
      db.User.findOneAndRemove({_id:req.params.userId})
      .then((res)=>{
              res.json({status:"sucess",msg:"sucessfully deleted the user"})

      })
      .catch(err=>{
            logError(err.msg,err)
            res.json({status:"failed",
                              msg: "Sorry Something went wrong. Please try again"
                      });
          });
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
  deleteUserReview:function(req,res){
      if(req.params.reviewId){
          db.Reviews.findOneAndRemove({_id:req.params.reviewId})
          .then((reviewObj)=>{
              res.json({status:"sucess",msg:"sucessfully deleted your review"})
              db.Compaines.findOne(
                {_id:reviewObj.companyId}
                ).then((companyObj)=>{
                    if(companyObj){
                      sendReport(`new review deleted for ${companyObj.name} by admin`);
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
  getUserReviews:function(req,res){
    db.Reviews.find({userId:req.params.userId})
    .then((reviews)=>{
      reviews.forEach((review)=>{
          review._doc.user={name:"",department:""};
      })
      res.json({status:"sucess",reviews:reviews});
    })
    .catch((err)=>{
      res.json({status:"failed",msg:"Something went wrong"});
    })
  },
  getUserReview:function(req,res){
    db.Reviews.findOne({_id:req.params.reviewId})
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
    verifiyMyEmail:async function (req, res) {
        let user_id = req.params.userId;
        if (user_id) {
            var user = await db.User.findOne({
                _id: user_id
            });
            if (user) {
                user.is_email_verified = true;
                new_user = await user.save();
                res.json({status:"sucess"});
                return
            }
            res.json({status:"failed"});
        }
    }

};

module.exports = admin;
