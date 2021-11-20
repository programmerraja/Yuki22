import React from "react";
import {useState} from "react";
import {useHistory } from "react-router-dom";


import SquareLoader from "../../components/SquareLoader";

import API from "../../utils/API";

import user from "../../img/user.png";
import "./style.css";



function Signin(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [loading,setLoading]=useState("");

  const [msg,setMsg]=useState("");


  const history = useHistory();

  function HandleForm(){
    setLoading(true);
    let res=  API.signIn({email,password})
    .then((res)=>{
      setLoading(false);
      if(res.data.status==="sucess"){
        API.setToken(res.msg.token);
        API.setAuthHeader();
        history.push("/reviews");
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
  };

  return ( 
    <>
    <SquareLoader  loading={loading}/>
    <div className="user">
      <img src={ user } className="user-img" />
    </div>  
    <div className="signin_container">
      <div className="form_container">

          <div className="form_input">
            <label for="name"> Email </label>
            <input type="email" placeholder="Email..." name="email" required="true" onChange={(e)=>{setEmail(e.target.value);}} value={email}/>
          </div>

          <div className="form_input">
            <label for="password"> Password </label>
            <input type="password" placeholder="Password..." name="password" required="true" onChange={(e)=>{setPassword(e.target.value);}}value={password} />
          </div>

          <div className="form_button">
             <input type="submit" name="signin" value="SIgn In" className="signin_button" onClick={HandleForm}  />
          </div>

          <div className="error_msg">
              <span>
              {msg}
              </span>
          </div>

          <div className="form_text">
              <small>
              <a href="/user/forget/password"> Forget password ? </a></small>
              <small> New to JustPlaced ? <a href="/signup"> Create an account </a></small>
          </div>
   
      </div>
    </div>
    </>);

  }

export default Signin;