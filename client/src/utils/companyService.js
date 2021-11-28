import axios from "axios";

export default {
  getCompanyList:function(){
    return axios.get("/company/list/");
  },
  getSortedCompanyList:function({value,type}){
    return axios.get("/company/sortedList/?sortBy="+value+"&type="+type);
  },
  getCompanyReviews:function(compainyId){
    return axios.get("/company/getReviews/"+compainyId);
  }
};