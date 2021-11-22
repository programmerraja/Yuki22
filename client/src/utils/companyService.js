import axios from "axios";

export default {
  getCompanyList:function(){
    return axios.get("http://localhost:3001/company/list/");
  },
  getCompanyReviews:function(compainyId){
    return axios.get("http://localhost:3001/company/getReviews/"+compainyId);
  }
};