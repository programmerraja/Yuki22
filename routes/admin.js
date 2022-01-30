const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");
const adminController = require("../controllers/adminController.js");
const companyController = require("../controllers/companyController.js");

const auth = require("../middleware/auth.js");

router.post("/user/signin",
			userController.signIn);

router.get("/user/getCounts",
			auth.isAuthenticatedUser(),
			auth.isAdmin,
			adminController.getCounts);

router.get("/user/getUserReviews/:userId",
			auth.isAuthenticatedUser(),
			auth.isAdmin,
			adminController.getUserReviews);

router.get("/user/getUserReview/:reviewId",
			auth.isAuthenticatedUser(),
			auth.isAdmin,
			adminController.getUserReview);

router.get("/user/deleteUserReview/:reviewId",
			auth.isAuthenticatedUser(),
			auth.isAdmin,
			adminController.deleteUserReview);

router.post("/user/updateUserReview",
			auth.isAuthenticatedUser(),
			auth.isAdmin,
			adminController.updateUserReview);

router.get("/user/getAllUsers",
			auth.isAuthenticatedUser(),
			auth.isAdmin,
			adminController.getAllUsers);

router.get("/user/deleteUser/:userId",
			auth.isAuthenticatedUser(),
			auth.isAdmin,
			adminController.deleteUser);

router.get("/company/delete/:companyId",
			auth.isAuthenticatedUser(),
			auth.isAdmin,
			adminController.deleteCompany);

module.exports = router;
