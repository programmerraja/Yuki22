const router = require("express").Router();

const users = require("./users");
const company = require("./company");

require("dotenv").config();



router.use("/user", users);
router.use("/company", company);



module.exports = router;
