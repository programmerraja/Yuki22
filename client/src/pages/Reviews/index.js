import React from "react";
import {useState,useEffect} from "react";
import {useParams,useHistory} from "react-router-dom";

import ReviewCard from "../../components/ReviewCard";
import SquareLoader from "../../components/SquareLoader";
import CardLoader from '../../components/CardLoader';

import API from "../../utils/API";
import errorHandler from "../../utils/errorHandler";

import askQuestion from "../../utils/askQuestion";


import "./style.css";


const querys={
  hrating:{value:"rating",type:-1},
  lrating:{value:"rating",type:1},
  latest:{value:"createdAt",type:-1},
  oldest:{value:"createdAt",type:1}
}
function Reviews({isLoggedin}){
  const [reviews,setReviews]=useState([]);
  const[sort_by,setSortBy]=useState();

  const [loading,setLoading]=useState(true);

  const { companyId } = useParams();
  const history=useHistory();
  useEffect(()=>{
    setLoading(true);
    API.getCompanyReviews(companyId)
    .then((res)=>{
        setLoading(false);
        if(res.data.status==="sucess"){
              setReviews(res.data.reviews);
              askQuestion(history)
         }
         else{
          errorHandler(true,res.data.msg);
         }
    })
    .catch((res)=>{
         res=res.response;
         setLoading(false);
         errorHandler(true,res.data.msg);
    });
  },[companyId,askQuestion])

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
         res=res.response;
         setLoading(false);
         errorHandler(true,res.data.msg);
      });
    }
  }

  const likeTheReview=(review_id)=>{
    if(review_id){
      API.likeTheReview(review_id)
    }else{
      history.push("/signin")
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
         <CardLoader loading={loading} is_review={true}/>
        {
            !loading && reviews.map((review)=>{
              return(
                  <ReviewCard 
                      key={review.user.name}
                      {...review}
                      isLoggedin={isLoggedin} 
                      likeTheReview={likeTheReview} />
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