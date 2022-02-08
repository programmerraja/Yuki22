const jwt = require('jsonwebtoken');

const db = require("../models");
const passport = require("../passport");


const auth=
		{
			isAuthenticatedUser:function () {
				return passport.authenticate('user_jwt', { session: false })
			},
			isAdmin:function (req,res,next) {
				if(req.user.isAdmin===1){
					next();
				}else{
					res.status(400).json({
					        status: "failed",
					        msg: "You don't has access"
					    });
				}
			},
			isAuthenticated:function () {
				return (req,res,next)=>{
					try{
						let token=req.headers["authorization"]
						if(token){
							token=token.split("Bearer ")[1]
							if(token){
								user=jwt.verify(token,process.env.JWT_KEY)
								if(user){
									req.user=user;
								}
							}
						}
					}catch{}
					if(!req.user){
						req.user={}
					}
					next()
				}
			}
		}
module.exports = auth;