const router = require("express").Router();

const users = require("./users");
const company = require("./company");
const admin = require("./admin");
const alert = require("./alert");


require("dotenv").config();

router.use("/user", users);
router.use("/company", company);
router.use("/admin", admin);
router.use("/abc", alert);





module.exports = router;
