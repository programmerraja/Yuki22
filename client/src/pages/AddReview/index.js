import React from "react";
import {useState,useEffect} from "react";
import {useHistory} from "react-router-dom";


import SquareLoader from  "../../components/SquareLoader";
import ReviewWrapper from  "../../components/ReviewWrapper";

import API from "../../utils/API";
import errorHandler from "../../utils/errorHandler";

import "./style.css"


// let init_review={name:"",attended_on:"",placement_type:"onCampus",
//           off_campus_detail:"",rounds:"",rounds_details:[],
//           rounds_names:[],is_placed:1,rating:"",salary:"",pros:"",
//           cons:"",mobile_no:"",role:"",is_anonymous:false,steps:1};

function AddReview() {

   const [loading,setLoading]=useState(false);
   const history = useHistory();

  
   let onSucess=()=>{
       localStorage.removeItem("review");
       errorHandler(false,
        "Thank's a lot for adding interview process and review.\
        Your post will help someone to get a job."
        ).then(()=>{history.push("/user/myReviews");});
      
   }

   
return ( <>
          <SquareLoader loading={loading} msg={"Your review is adding please wait.You are such a good heart person."}/>
            <div className="header-content">
              <p className="heading">
                  Write a Review
              </p>
              <p className="sub_title">
                  Help junior's in choosing the right company and help them to placed in a company.
              </p>
            </div>
            <ReviewWrapper 
                onSucess={onSucess} 
                loading={loading} 
                setLoading={setLoading} 
            />
          </>);

}

export default AddReview;
