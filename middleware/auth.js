const passport = require("../passport");


const auth=
		{
			isAuthenticatedUser:function () {
				return passport.authenticate('user_jwt', { session: false })
			},
			isAuthenticatedAdmin:function () {
				return passport.authenticate('admin_jwt', { session: false })
			}
		}
module.exports = auth;