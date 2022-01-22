import React from "react";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";

import ReviewCard from "../../components/ReviewCard";
import SquareLoader from "../../components/SquareLoader";
import CardLoader from '../../components/CardLoader';

import API from "../../utils/API";
import errorHandler from "../../utils/errorHandler";


import "./style.css";


const querys={
  hrating:{value:"rating",type:-1},
  lrating:{value:"rating",type:1},
  latest:{value:"createdAt",type:-1},
  oldest:{value:"createdAt",type:1}
}
function Reviews(){
  const [reviews,setReviews]=useState([]);
  const[sort_by,setSortBy]=useState();

  const [loading,setLoading]=useState(true);

  const { companyId } = useParams();

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
  },[companyId])

  const sortedReviewsList=(sort_by)=>{
    if(sort_by){
      let query={companyId:companyId,...querys[sort_by]}
      API.getSortedReviews(query)
      .then((res)=>{
          if(res.data.status==="sucess"){
              setReviews(res.data.reviews);
              setLoading(false);
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
    }
  }

  
  return ( 
    <>
     
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

        { !loading && reviews.length>0 &&
            <div className="filter_option-wrapper">
              <label className="filter_option-label">
                       <span>Sort By: </span></label>
                       <select
                              className="filter_option" 
                              onChange={(e)=>{
                                setSortBy(e.target.value);
                                sortedReviewsList(e.target.value);}}>
                        <option value="">None</option>
                        <option value="hrating">Rating: High to Low</option>
                        <option value="lrating">Rating: Low to High</option>
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                     </select>
            </div>
        }
         <CardLoader loading={loading}/>
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