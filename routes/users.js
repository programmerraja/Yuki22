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

router.post("/verifiy/email/:userId",
	userController.emailVerified);


router.get("/getMyProfile",
			auth.isAuthenticatedUser(),
			userController.getProfile);

router.get("/getMyReviews",auth.isAuthenticatedUser(),
	userController.getMyReviews);

router.post("/addMyReview",auth.isAuthenticatedUser(),checkMailVerified,
	userController.addMyReview);

module.exports = router;
