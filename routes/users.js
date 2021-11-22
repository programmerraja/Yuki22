const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const auth = require("../middleware/auth.js");
const sanitizeHtml = require("../middleware/sanitizeHtml.js");


// console.log(userController)
router.post("/signin",
	userController.signIn);

router.post("/signup",
	userController.signUp);

router.get("/companyNames",
	userController.getCompanyList);

router.get("/getMyReviews",auth.isAuthenticatedUser(),
	userController.getMyReviews);

router.post("/addMyReview",auth.isAuthenticatedUser(),
	userController.addMyReview);

module.exports = router;
