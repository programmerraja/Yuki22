import React from "react";
import {useState,useEffect} from "react";
import {useHistory ,useParams} from "react-router-dom";

import ReviewCard from "../../components/ReviewCard";
import SquareLoader from "../../components/SquareLoader";

import API from "../../utils/API";
import errorHandler from "../../utils/errorHandler";


import "./style.css";



function Reviews(){
  const [reviews,setReviews]=useState([]);

  const [loading,setLoading]=useState(true);

  const { companyId } = useParams();


  const history = useHistory();

   useEffect(()=>{
    setLoading(true);
    API.getCompanyReviews(companyId)
    .then((res)=>{
        setLoading(false);
        if(res.data.status==="sucess"){
              setReviews(res.data.reviews);
         }
         else{
          errorHandler(true,res.data.msg);
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
  },[])
  
  return ( 
    <>
    <SquareLoader  loading={loading}/>
      <div className="review_wrapper">
        {
         (!loading && reviews[0] && reviews[0].company)? 
         (
            <div className="companies_contents" key={reviews[0].company.name}>
              <p className="companies_content-text ">{reviews[0].company.name}</p>
              <p className="companies_content-rating ">{reviews[0].company.rating && reviews[0].company.noOfReviews?(reviews[0].company.rating/reviews[0].company.noOfReviews).toFixed(1):0}<i className="far fa-star"></i> </p>
              <p className="companies_content-review ">{reviews[0].company.noOfReviews}<i className="fas fa-user-friends"></i></p>
            </div>
          ):null
        }
        {
            !loading && reviews.map((review)=>{
              return(
                  <ReviewCard 
                      key={review.user.name}
                      {...review}/>
                ) 
            })
        }
        { 
          reviews.length==0 && !loading?
          <p>This company has no reviews yet or reviews may be deleted 
          </p>:null  
        }
      </div>
        
    </>);

  }

export default Reviews;