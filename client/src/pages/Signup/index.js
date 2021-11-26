import React from "react";
import {useState} from "react";
import {useHistory } from "react-router-dom";


import SquareLoader from  "../../components/SquareLoader";

import API from "../../utils/API";

import user from "../../img/user.png";

function Signup() {
   const [name,setName]=useState("");
   const [regNo,setRegNo]=useState("");
   const [department,setDepartment]=useState("CSE");
   const [email,setEmail]=useState("");
   const [msg,setMsg]=useState("");

   const [password,setPassword]=useState("");
   const [loading,setLoading]=useState("");

   const history = useHistory();

   function validate(){
      if(name && regNo && department && email && password){
        return true
      }
      return false;
   }

   function siginUp(){
     if(validate()){
       setLoading(true);
       API.signUp({name,regNo,department,email,password})
       .then((res)=>{
              setLoading(false);
             if(res.data.status==="sucess"){
               history.push("/signin");
             }
             else{
                setMsg(res.data.msg);
             }
       })
       .catch((res)=>{
          setLoading(false);
          if(res.data && res.data.msg){
            setMsg(res.data.msg);
          }else{
            setMsg("Something went wrong");
          }
    });
       
     }
     setMsg("Fill all detail")
     
  }

return ( <>
    <SquareLoader  loading={loading}/>
    <div className="user">
       <img src={ user } className="user-img" />
    </div>

    <div className="signup_container">
        <div className="form_container">
            <div className="form_input">
              <label for="name"> Name </label>
              <input type="text" name="name" required="true" onChange={(e)=>{setName(e.target.value);}} value={name}/>
            </div>

            <div className="form_input">
              <label for="regno"> Register Number </label>
              <input type="text" name="regno" required="true" onChange={(e)=>{setRegNo(e.target.value);}} value={regNo}/>
            </div>

            <div className="form_input">
              <label for="email"> Email </label>
              <input name="email" required="" type="email" onChange={(e)=>{setEmail(e.target.value);}} value={email} />
            </div>

            <div className="form_input">
                <label for="department"> Department </label>
                <select name="department"  onChange={(e)=>{setDepartment(e.target.value);}}>
                  <option value="CSE">CSE</option>
                  <option value="MECH">MECH</option>
                  <option value="EEE">EEE</option>
                  <option value="ECE">ECE</option>
                  <option value="CIVIL">CIVIL</option>
                  <option value="OTHER">OTHER</option>
                </select>
            </div>

            <div className="form_input">
            <label for="password"> Password </label>
            <input type="password" name="password" required="true"onChange={(e)=>{setPassword(e.target.value);}} value={password} />
            </div>


            <div className="form_button">
            <input type="submit" name="login" value="Sign Up" className="signup" onClick={siginUp}/>
            </div>

            <div className="error_msg">
            {msg}
            <span>
            </span>
            </div>

        </div>
    </div>
    </>);

}
export default Signup;