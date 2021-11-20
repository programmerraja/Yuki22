import axios from "axios";

export default {
  signIn: function (userCred) {
    return axios.post("http://localhost:3001/user/signin",userCred);
  },

  signUp: function (userCred) {
    return axios.post("http://localhost:3001/user/signup/",userCred);
  },
  
};