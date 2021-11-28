import axios from "axios";

export default {
  getCompanyList:function(){
    return axios.get("/company/list/");
  },
  getSortedCompanyList:function({value,type}){
    return axios.get("/company/sortedList/?sortBy="+value+"&type="+type);
  },
  getCompanyReviews:function(companyId){
    return axios.get("/company/getReviews/"+companyId);
  },
  getSortedReviews:function({companyId,value,type}){
    return axios.get("/company/sortedReviews/"+companyId+"?sortBy="+value+"&type="+type);
  },
};