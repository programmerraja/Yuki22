import React from "react";
import {useState,useEffect} from "react";

import Api from "../../utils/API";

import user from "../../img/user.svg";
/**
 * Function to add two numbers
 * @param {number} a
 * @param {number} b 
 */
function UserProfile() {
   const [name,setName]=useState("");
   const [old_password,setOldPassword]=useState("");
   const [new_password,setNewPassword]=useState("");
   const [msg,setMsg]=useState("");

   async function handleClick() {
    let res=await Api.updateProfile(name,old_password,new_password);
    if(res.status==="Sucess"){
      setName(res.name);
      setMsg(res.error_msg);
    }
    else{
      setMsg(res.error_msg);
    }
   }
   async function getProfile(){
    let res=await Api.getProfile();
    if(res.status==="Sucess"){
      setName(res.name);
    }
    else{
      setMsg(res.error_msg);
    }

   }
   
   // useEffect(()=>{
   //    if(!name){
   //      getProfile();
   //    }
   // },[])
return ( <>
          <div className="user">
          <img src={ user } className="user-img" />
          </div>
          
          <div className="profile_container">
              <div className="form_container">
                  <div className="form_input">
                    <label for="name"> Name </label>
                    <input type="text" name="name" required="true" onChange={(e)=>{setName(e.target.value);}} value={name}/>
                  </div>

                  <div className="form_input">
                    <label for="old_password"> Old Password </label>
                    <input type="old_password" name="old_password" placeholder="Old password" required="true" onChange={(e)=>{setOldPassword(e.target.value);}} value={old_password} />
                  </div>

                  <div className="form_input">
                    <label for="new_password"> New Password </label>
                    <input type="new_password" name="new_password" placeholder="New password" onChange={(e)=>{setNewPassword(e.target.value);}} value={new_password} />
                  </div>


                  <div className="error_msg">
                    <span>
                    {msg}
                    </span>
                  </div>

                  <div className="form_button">
                      <input type="submit" name="update" value="Update My Account" className="update" onClick={handleClick}/>
                  </div>
              </div>
          </div>
          </>);

}

export default UserProfile;