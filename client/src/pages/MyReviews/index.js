import React from "react";
import {useState,useEffect} from "react";
import {useHistory ,useParams,Link} from "react-router-dom";

import ReviewCard from "../../components/ReviewCard";

import SquareLoader from "../../components/SquareLoader";


import API from "../../utils/API";

import "./style.css";



function MyReviews(){
  const [reviews,setReviews]=useState([]);

  const [loading,setLoading]=useState(true);


  const [msg,setMsg]=useState("");


  const history = useHistory();

   useEffect(()=>{
    setLoading(true);
    API.getMyReviews()
    .then((res)=>{
        setLoading(false);
        if(res.data.status==="sucess"){
              setReviews(res.data.reviews);
         }
         else{
          setMsg(msg);
         }
    })
    .catch((res)=>{
      setLoading(false);
      if(res.data && res.data.msg){
          setMsg(msg);
      }else{
          setMsg("Something went wrong");
      }
    });
  },[])
  
  return ( 
    <>
    <SquareLoader  loading={loading}/>
      <div className="review_wrapper">
        {
            !loading && reviews.map((review)=>{
              return(
                  <ReviewCard 
                      {...review}
                      isEditing={true}/>
                ) 
            })
        }
        { 
          reviews.length==0?
          <p>You has added No reviews yet 
            <Link to="/user/addReview"> Add Here</Link>         
          </p>:null  
        }
      </div>
        
    </>);

  }

export default MyReviews;