const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");
const adminController = require("../controllers/adminController.js");
const companyController = require("../controllers/companyController.js");

const auth = require("../middleware/auth.js");


router.post("/user/signin",
			userController.signIn);

router.get("/user/getCounts",
			
			adminController.getCounts);

router.get("/user/getUserReviews/:userId",
			
			adminController.getUserReviews);

router.get("/user/getUserReview/:reviewId",
			
			adminController.getUserReview);

router.get("/user/deleteUserReview/:reviewId",
			
			adminController.deleteUserReview);

router.post("/user/updateUserReview",
			
			adminController.updateUserReview);

router.get("/user/getAllUsers",
			
			adminController.getAllUsers);

router.get("/user/deleteUser/:userId",
			
			adminController.deleteUser);

router.get("/company/delete/:companyId",
			
			adminController.deleteCompany);

module.exports = router;
