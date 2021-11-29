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
			}
		}
module.exports = auth;