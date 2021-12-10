import axios from "axios";
import jwt_decode from "jwt-decode";

import userService from "./userService";
import companyService from "./companyService";


export default {
  setToken:function (token) {
     localStorage.setItem("token",token);
  },
  isAuth:function(){
    let token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  },
  setAuthHeader: function () {
    let token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
  },
  removeAuthHeader: function () {
    axios.defaults.headers.common["Authorization"] = "";
  },
  checkTokenExp: function () {
    let token = localStorage.getItem("token");
    //check only if token avalible and checking it is valid token 
    //if it valid token if we split according to dot the array length will greater then or =2
    if (token && token.split(".").length>=2)  {
      var decoded = jwt_decode(token);
      let currentDate = new Date();
      // JWT exp is in seconds
      if (decoded.exp * 1000 < currentDate.getTime()) {
        //removing user data from local storage
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        return true;
      }
    }else{
      //token not valid mean it expired so true
      return true;
    }
    return false;
  },
  decodedUserJWT: function () {
    let token = localStorage.getItem("token");
    //check only if token avalible
    if (token  && token.split(".").length>=2) {
      var decoded = jwt_decode(token);
      let user = decoded;
      return user;
    }
    return null;
  },

  getCounts:userService.getCounts,
  signIn:userService.signIn,
  signUp:userService.signUp,
  verfiyEmail:userService.verfiyEmail,

  addMyReview:userService.addMyReview,
  deleteUserReview:userService.deleteUserReview,
  
  getCompanyNames:userService.getCompanyNames,
  getUserReviews:userService.getUserReviews,
  getUserReview:userService.getUserReview,
  updateUserReview:userService.updateUserReview,


  getAllUsers:userService.getAllUsers,
  deleteUser:userService.deleteUser,
  getMyProfile:userService.getMyProfile,
  updateProfile:userService.updateProfile,
  
  sendForgetPassword:userService.sendForgetPassword,
  sendResetPassword:userService.sendResetPassword,

  logout:userService.logout,

  getCompanyList:companyService.getCompanyList,
  getCompanyReviews:companyService.getCompanyReviews,
  deleteCompany:companyService.deleteCompany
};

function setAuthHeader() {
    let token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
  }
//setting token
setAuthHeader();
