const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController.js");
const auth = require("../middleware/auth.js");
const sanitizeHtml = require("../middleware/sanitizeHtml.js");

router.get("/getReviews/:companyId",auth.isAuthenticated(),
			companyController.getReviews);

router.get("/sortedReviews/:companyId",auth.isAuthenticated(),
			companyController.getSortedReviews);

router.get("/sortedList/",
			companyController.getSortedCompanyList);

router.get("/list",
			companyController.getCompanyList);


module.exports = router;
