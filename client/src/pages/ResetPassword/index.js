// import React from "react";

// import {useState} from "react";

// import Api from "../Api/index.js";

// import Loading from "../Loading/Loading";

// import reset from "../img/reset.svg";
// /**
//  * ResetPassword
//  * @namespace ResetPassword
//  */
// // need to check the id is valid
// function ResetPassword({match,setLoading}) {
//   let [password,setPassword]=useState("");
//   let [msg,setMsg]=useState("");
// /**
//  * @memberof Scammer
//  * @summary A concise summary.
//  * @param {number} a
//  * param description
//  * @returns {number} Sum of a and b
//  * returns description
//  *@todo Write the documentation.
//  * {@link https://github.com GitHub}.
//  */  
//   async function sendResetPassword(){
//     setLoading(true);
//     let res=await Api.sendResetPassword(match.params.id,password);
//     setLoading(false);
//     setMsg(res.msg);
//   }

// return ( <div className="reset_container">

//         <div className="reset_img">
//         <img src={reset} />
//         </div>

//         <div className="reset_text">
//         <h2> Change Password </h2>
//         <p> Create a new, strong password that you don 't use for other websites. </p>

//         <input type="password" name="password" className="reset_password" placeholder="Enter a new password"  onChange={(e)=>{setPassword(e.target.value);}}  value={password} />
//         <input type="button" name="change_password" className="change_password" value="Change Password" onClick={sendResetPassword}/>
//         </div>

//         <p className="reset_error">
//         {msg}
//         </p>

//         </div>);
// }

// export default Loading(ResetPassword);