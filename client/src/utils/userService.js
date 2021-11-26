import axios from "axios";

export default {
  signIn: function (userCred) {
    return axios.post("/user/signin",userCred);
  },
  signUp: function (userCred) {
    return axios.post("/user/signup/",userCred);
  },
  addMyReview:function(review){
    return axios.post("/user/addMyReview/",review);
  },
  deleteMyReview:function(review_id){
    return axios.get("/user/deleteMyReview/"+review_id);
  },
  getCompanyNames:function(){
    return axios.get("/user/companyNames/");
  },
  getMyReviews:function(){
    return axios.get("/user/getMyReviews/");
  },
  getMyProfile:function(){
    return axios.get("/user/getMyProfile/");
  },
  sendForgetPassword:function(email){
    return axios.post("/user/forget/password",email);
  },

  logout:function(){
    return axios.get("/user/logout/");
  }
};