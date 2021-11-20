const express = require("express");
const router = express.Router();
var validator = require('validator');
const jwt = require('jsonwebtoken');
const db = require("../models");
const passport = require("../passport");
require("dotenv").config();
const sanitizeHtml = require("../middleware/sanitizeHtml.js");
const logError = require("../util/logError");



router.post("/signup",sanitizeHtml, async 
);


router.post("/login",sanitizeHtml, );


router.get("/logout", function (req, res) {
  req.logout();
  res.sendStatus(200)
});



router.post("/forgotPass", sanitizeHtml,postForgetPassword(req, res) {

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
                    status: "Failed",
                    msg: "Sorry Something went wrong. Please try again"
                });
            }
            return
        }
        res.json({
            status: "Failed",
            msg: "No user exit with given gmail"
        })
    }
});

module.exports = router;
