import axios from "axios";

export default {
  getCompanyList:function(){
    return axios.get("/company/list/");
  },
  getCompanyReviews:function(compainyId){
    return axios.get("/company/getReviews/"+compainyId);
  },
  deleteCompany:function(compainyId){
    return axios.get("/admin/company/delete/"+compainyId);
  }
};