const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const auth = require("../middleware/auth.js");
const checkMailVerified = require("../middleware/checkMailVerified.js");

const sanitizeHtml = require("../middleware/sanitizeHtml.js");


// console.log(userController)
router.post("/signin",
	userController.signIn);

router.post("/signup",
	userController.signUp);

router.get("/companyNames",
	userController.getCompanyList);

router.get("/getMyProfile",
			auth.isAuthenticatedUser(),
			userController.getMyProfile);

router.post("/updateMyProfile",
			auth.isAuthenticatedUser(),
			userController.updateMyProfile);

router.get("/getMyReviews",auth.isAuthenticatedUser(),
	userController.getMyReviews);

router.get("/getMyReview/:reviewId",auth.isAuthenticatedUser(),
	userController.getMyReview);

router.get("/deleteMyReview/:reviewId",auth.isAuthenticatedUser(),
	userController.deleteMyReview);

router.post("/updateMyReview",auth.isAuthenticatedUser(),checkMailVerified,
	userController.updateMyReview);

router.post("/addMyReview",auth.isAuthenticatedUser(),checkMailVerified,
	userController.addMyReview);

module.exports = router;
