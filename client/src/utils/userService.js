import axios from "axios";

export default {
  signIn: function (userCred) {
    return axios.post("http://localhost:3001/user/signin",userCred);
  },
  signUp: function (userCred) {
    return axios.post("http://localhost:3001/user/signup/",userCred);
  },
  addMyReview:function(review){
    return axios.post("http://localhost:3001/user/addMyReview/",review);
  },
  getCompanyNames:function(){
    return axios.get("http://localhost:3001/user/companyNames/");
  },
  getMyReviews:function(){
    return axios.get("http://localhost:3001/user/getMyReviews/");
  },
  logout:function(){
    return axios.get("http://localhost:3001/user/logout/");
  }
};