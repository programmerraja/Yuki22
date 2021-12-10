import React from "react";
import {useState,useEffect} from "react";
import {useHistory ,useParams,Link} from "react-router-dom";
import swal from "sweetalert";

import ReviewCard from "../../components/ReviewCard";
import SquareLoader from "../../components/SquareLoader";

import API from "../../utils/API";
import errorHandler from "../../utils/errorHandler";

import "./style.css";

function UserReviews(){
  const [reviews,setReviews]=useState([]);

  const [loading,setLoading]=useState(true);

  const [msg,setMsg]=useState("");
  
  const { userId } = useParams();

  const history = useHistory();

   useEffect(()=>{
    API.getUserReviews(userId)
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
  
  const deleteReview=(review_id)=>{
     swal({
      title: "Are you sure?",
      text: "You want to delete this review.",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then((confirm) => {
      if (confirm) {
        API.deleteUserReview(review_id)
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
          setLoading(false);
          if(res.data && res.data.msg){
              errorHandler(true,res.data.msg);
          }else{
              errorHandler(true);
          }
        });
    }
    });
  }

  return ( 
    <>
    <SquareLoader  loading={loading}/>
      <div className="review_wrapper">
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
          <p>He has added No reviews yet 
            <Link to="/yukiAdmin/user/addReview"> Add Here</Link>         
          </p>:null  
        }
      </div>
        
    </>);

  }

export default UserReviews;