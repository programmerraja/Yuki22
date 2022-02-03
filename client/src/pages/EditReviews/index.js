import React from "react";
import {useState,useEffect} from "react";
import {useHistory,useParams } from "react-router-dom";

import SquareLoader from  "../../components/SquareLoader";
import ReviewWrapper from  "../../components/ReviewWrapper";

import API from "../../utils/API";
import errorHandler from "../../utils/errorHandler";

function EditReview() {
   
   const [loading,setLoading]=useState(true); 

   const history = useHistory();
   const { reviewId } = useParams();

   const onSucess=()=>{
         history.push("/user/myReviews");
   }  

   return ( <>
           <SquareLoader  loading={loading}  msg={"Your review is updating please wait.East are west you are the best."}/>  
           
           <ReviewWrapper 
              onSucess={onSucess} 
              loading={loading} 
              setLoading={setLoading} 
              isEdit={true} 
              reviewId={reviewId}
            />
          </>);

}

export default EditReview;