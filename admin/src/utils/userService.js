import axios from "axios";

export default {
  signIn: function (userCred) {
    return axios.post("/admin/user/signin",userCred);
  },
  getCounts:function () {
    return axios.get("/admin/user/getCounts");
  },
  getAllUsers: function (page,limit) {
    return axios.get(
      "/admin/user/getAllUsers/?limit=" +
        limit +
        "&page=" +
        page
    );
  },
  deleteUser:function (user_id) {
      return axios.get("/admin/user/deleteUser/"+user_id);
  },
  verfiyEmail:function(user_id){
    return axios.get("/admin/user/verifiyMyEmail/"+user_id);
  },
  addMyReview:function(review){
    return axios.post("/admin/user/addMyReview/",review);
  },
  updateUserReview:function(review){
    return axios.post("/admin/user/updateUserReview/",review);
  },
  deleteUserReview:function(review_id){
    return axios.get("/admin/user/deleteUserReview/"+review_id);
  },
  getCompanyNames:function(){
    return axios.get("/admin/user/companyNames/");
  },
  getUserReviews:function(user_id){
    return axios.get("/admin/user/getUserReviews/"+user_id);
  },
  getUserReview:function(review_id){
  return axios.get("/admin/user/getUserReview/"+review_id);
  },
  getMyProfile:function(){
    return axios.get("/admin/user/getMyProfile/");
  },
  updateProfile:function(user){
    return axios.post("/admin/user/updateMyProfile/",user);
  },
  logout:function(){
    return axios.get("/admin/user/logout/");
  }
};