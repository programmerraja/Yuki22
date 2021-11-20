const router = require("express").Router();
const userAuth = require("./userAuth");
const users = require("./users");
const jwt = require('jsonwebtoken');
require("dotenv").config();
const passport = require("../passport");


router.use("/user", users);


module.exports = router;
