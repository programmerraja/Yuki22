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
  getCompanyNames:function(){
    return axios.get("/user/companyNames/");
  },
  getMyReviews:function(){
    return axios.get("/user/getMyReviews/");
  },
  getMyProfile:function(){
    return axios.get("/user/getMyProfile/");
  },
  logout:function(){
    return axios.get("/user/logout/");
  }
};