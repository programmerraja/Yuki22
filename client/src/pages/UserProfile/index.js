import React from "react";
import {useState,useEffect} from "react";
import SquareLoader from  "../../components/SquareLoader";

import API from "../../utils/API";
import errorHandler from "../../utils/errorHandler";


import user from "../../img/user.svg";

function UserProfile() {
   const [name,setName]=useState("");
   const [old_password,setOldPassword]=useState("");
   const [new_password,setNewPassword]=useState("");

   const [loading,setLoading]=useState(true);


   const handleClick=()=> {
    setLoading(true)
    API.updateProfile({name,old_password,new_password})
      .then((res)=>{
          setLoading(false);
          if(res.data.status==="sucess"){
              errorHandler(false,res.data.msg);
          }else{
              errorHandler(true,res.data.msg);
          }
      })
      .catch((res)=>{
         res=res.response;
         setLoading(false);
         errorHandler(true,res.data.msg);
      });
   }

   const getProfile=()=>{
    let res= API.getMyProfile()
    .then((res)=>{
      setLoading(false);
      if(res.data.status==="sucess"){
        setName(res.data.name);
      }
    })
    .catch((res)=>{
        setLoading(false);
        if(res.data && res.data.msg){
              errorHandler(true,res.data.msg);
        }else{
              errorHandler(true);
        }
    });
    
   }
   
   useEffect(()=>{
      if(!name){
        getProfile();
      }
   },[])
return ( <>
          <SquareLoader  loading={loading}/>
          <div className="profile_container">
              <div className="form_container">
                  <div className="form_input">
                    <label for="name"> Name </label>
                    <input type="text" name="name" required={true} onChange={(e)=>{setName(e.target.value);}} value={name}/>
                  </div>

                  <div className="form_input">
                    <label for="old_password"> Old Password </label>
                    <input type="old_password" name="old_password" placeholder="Old password" required="true" onChange={(e)=>{setOldPassword(e.target.value);}} value={old_password} />
                  </div>

                  <div className="form_input">
                    <label for="new_password"> New Password </label>
                    <input type="new_password" name="new_password" placeholder="New password" onChange={(e)=>{setNewPassword(e.target.value);}} value={new_password} />
                  </div>
                  <div className="form_button">
                      <input type="submit" name="update" value="Update My Account" className="update" onClick={handleClick}/>
                  </div>
              </div>
          </div>
          </>);

}

export default UserProfile;