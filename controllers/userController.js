const db = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
var validator = require("validator");
const passport = require("passport");

const logError = require("../util/logError");
const {verfiyMail,dbErrorHandler} = require("../util/util");


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
                   let payload=JSON.stringify({"id":user._id,username:user.username,"email":user.email, exp: Math.floor(Date.now() / 1000) + (60 * 60*24*7)});
                   // generate a signed son web token with the contents of user object and return it in the response
                   const token = jwt.sign(payload, process.env.JWT_KEY);
                   return res.json({status:"sucess",token});
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
    console.log(req.body)
    if (name && email && password && regNo && department) {
        if (!validator.isEmail(email)) {
            res.json( {
                status:"failed",
                msg: "Invalid Email"
            });
            return
        }

        let hash = bcrypt.hashSync(password, 2);
        db.User.create({
            name,
            email,
            department,
            regno:regNo,
            password: hash
        })
        .then(new_user => {
            if (new_user) {
              let link = req.protocol + "://" + req.get("host") + "/user/verifiy/email/" + new_user._id;
              let msg =true
               // await verfiyMail(new_user.email, new_user.name, link);

              if (msg) {
                  res.json({"status":"sucess","msg":"Account created sucessfully"});
              } else {
                  //need to remove user from database  if mail not send sucessfully
                     usermodel.deleteOne({
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
          logError(err.msg,err)
          res.json({status:"failed",
                            msg: "Sorry Something went wrong. Please try again"
                    });
        })
        
        
    }
    else{
       res.json({status:"failed",
                        msg: "Please enter all the detail's."
                }); 
    }
  },

    
  postUserProfile:async function (req, res) {
        if (req.body.name && req.body.old_password) {

            let {
                name,
                old_password,
                new_password
            } = req.body;
            let user_id = req.user._id;
            let user = await usermodel.findOne({
                _id: user_id
            });
            if (user) {

                if (bcrypt.compareSync(old_password, user.password)) {
                    if (new_password) {
                        new_password = bcrypt.hashSync(new_password, 2);
                        user.name = name;
                        user.password = new_password;
                    } else {
                        user.name = name;
                    }

                    user = await user.save().catch((err) => {
                        let msg = dbErrorHandler(err)
                        res.json({
                            status:"failed",
                            name: req.user.name,
                            msg: msg
                        });
                    });
                    if (user) {
                        res.json({
                            status:"Sucess",
                            name: user.name,
                            msg: "Sucess fully updated"
                        });
                    }

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
  
    postForgetPassword:async function (req, res) {

        if (req.body.email) {
            let email = req.body.email;
            var user = await usermodel.findOne({
                email: email
            });
            if (user) {
                let token = generateToken();
                let link = req.protocol + "://" + req.get("host") + "/user/reset/password/" + token;

                //we adding 20 mins to current date and converting in to mili sec
                let password_reset_expires = Date.now() + 20 * 60 * 1000;
                //updating the user token
                let new_user = await usermodel.findOneAndUpdate({
                    _id: user._id
                }, {
                    password_reset_token: token,
                    password_reset_expires: password_reset_expires
                });

                //sending mail to user
                let msg = await sendPasswordReset(user.email, user.name, link);
                //if msg send sucessfully 
                if (msg) {
                    res.json({
                        status: "Sucess",
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
    },

    postResetPassword:async function (req, res) {
        let password_reset_token = req.body.id;
        let new_password = req.body.password;
        if (password_reset_token && new_password) {

            //finding the user
            var user = await usermodel.findOne({
                password_reset_token: password_reset_token,
                password_reset_expires: {
                    $gt: Date.now()
                }
            });
            if (user) {
                let hash = bcrypt.hashSync(new_password, 2);
                let new_user = await usermodel.findOneAndUpdate({
                    _id: user._id
                }, {
                    password: hash
                });
                res.json({
                    status: "Sucess",
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

    },
    emailVerified:async function (req, res) {
        let user_id = req.body.id;
        if (user_id) {
            var user = await usermodel.findOne({
                _id: user_id
            });
            if (user) {
                user.is_email_verified = true;
                new_user = await user.save();
                res.json({status:"Sucess"});
                return
            }
            res.json({status:"failed"});
        }
    }

};

module.exports = user;
