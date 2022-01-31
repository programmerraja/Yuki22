import React from "react";
import {useState,useEffect} from "react";
import {useHistory ,useParams,Link} from "react-router-dom";
import swal from "sweetalert";

import ReviewCard from "../../components/ReviewCard";
import CardLoader from "../../components/CardLoader";

import API from "../../utils/API";
import errorHandler from "../../utils/errorHandler";


import "./style.css";



function MyReviews(){
  const [reviews,setReviews]=useState([]);

  const [loading,setLoading]=useState(true);

  const [msg,setMsg]=useState("");

  const history = useHistory();

   useEffect(()=>{
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
         res=res.response;
         setLoading(false);
         errorHandler(true,res.data.msg);
    });
  },[])
  
  const deleteReview=(review_id)=>{
     swal({
      title: "Are you sure?",
      text: "You want to delete this review.",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then((confirm) => {
      if (confirm) {
        API.deleteMyReview(review_id)
        .then((res)=>{
            setLoading(false);
            if(res.data.status==="sucess"){
              let new_review=[]
              reviews.forEach(review_obj=>{
                if(review_obj._id!=review_id){
                  new_review.push(review_obj)
                }
              });
              setReviews(new_review);
              errorHandler(false,res.data.msg);
            }
        
        })
        .catch((res)=>{
           res=res.response;
           setLoading(false);
           errorHandler(true,res.data.msg);
        });
    }
    });
  }

  return ( 
    <>
      <div className="review_wrapper">
        <CardLoader  loading={loading} />
        {
            !loading && reviews.map((review)=>{
              return(
                  <ReviewCard 
                      key={review.user.name}
                      {...review}
                      deleteReview={deleteReview}
                      isEditing={true}/>
                ) 
            })
        }
        { 
          reviews.length==0 && !loading?
          <p>You has added No reviews yet 
            <Link to="/user/addReview"> Add Here</Link>         
          </p>:null  
        }
      </div>
        
    </>);

  }

export default MyReviews;