const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController.js");
const auth = require("../middleware/auth.js");
const sanitizeHtml = require("../middleware/sanitizeHtml.js");

router.get("/getReviews/:companyId",
			companyController.getReviews);

router.get("/sortedReviews/:companyId",
			companyController.getSortedReviews);

router.get("/sortedList/",
			companyController.getSortedCompanyList);

router.get("/list",
			companyController.getCompanyList);


module.exports = router;
