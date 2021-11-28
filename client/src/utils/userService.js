import axios from "axios";

export default {
  signIn: function (userCred) {
    return axios.post("/user/signin",userCred);
  },
  signUp: function (userCred) {
    return axios.post("/user/signup/",userCred);
  },
  verfiyEmail:function(user_id){
    return axios.get("/user/verifiyMyEmail/"+user_id);
  },
  addMyReview:function(review){
    return axios.post("/user/addMyReview/",review);
  },
  updateMyReview:function(review){
    return axios.post("/user/updateMyReview/",review);
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
  getMyReview:function(review_id){
    return axios.get("/user/getMyReview/"+review_id);
  },
  getMyProfile:function(){
    return axios.get("/user/getMyProfile/");
  },
  updateProfile:function(user){
    return axios.post("/user/updateMyProfile/",user);
  },
  sendForgetPassword:function(email){
    return axios.post("/user/forgetMypassword",{email:email});
  },
  sendResetPassword:function(password_data){
    return axios.post("/user/resetMypassword",password_data);
  },
  logout:function(){
    return axios.get("/user/logout/");
  }
};