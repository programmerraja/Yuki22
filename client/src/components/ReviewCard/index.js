import React from "react";

import userImg from "../../img/user.svg";

import "./style.css";

function ReviewCard({
                    _id,
                    placementType,
                    rounds,
                    roundsDetails,
                    attendedOn,
                    isPlaced,
                    rating,
                    pros,
                    cons,
                    salary,
                    mobileNo,
                    advice,
                    user,
                    isEditing,
                    deleteReview
                  }){

  

  return ( 
    <>
        <div className="review_container">
        <div className="wrapper">
        {isEditing &&
          <div className="edit_icon">
             <i class="fas fa-edit"></i>
          </div>
        }
          <div  className="user_wrapper">
            <img src={userImg} alt="user" className="user_img"/>
            {isPlaced===1 &&
            <span className="user_text-green">Placed</span>
            }
            {rating &&
              <span className="user_text">
              {rating}
            
              <i class="far fa-star"></i></span>
            }
            <p className="user_name">{user.name}</p>
            <span className="user_text-small">{user.department}</span>
          </div>
        </div>

          <div className="wrapper">
            <div className="review_text">
            <p>placement type:
              <span className="review_text-bold">
               {placementType}</span>
            </p>
            </div>
            <p className="review_text-bold text-underline">Interview Process</p>
            <div class="padding">
              <div className="review_text">
                <p>No of rounds: 
                    <span className="review_text-bold">{rounds}</span>
                </p>
              </div>
              {
                Object.keys(roundsDetails).map((roundName,index)=>{
                  return(
                    <div className="review_rounds">
                    <details>
                        <summary className="review_text-bold d-inline" >
                        {index+1}.{roundName}</summary>
                      <div className="review_text">
                      {
                        roundsDetails[roundName]
                        .split("\n")
                        .map((text)=>{
                              return(<p className="review_text-point">{text}</p>)
                         })
                      }
                      </div>
                    </details>
                    </div>
                    )
                })
              }
            </div>
          </div>
          <div className="wrapper">
            {pros && 
              <div className="review_text">
                <p className="review_text-bold">pros:</p>
                {
                        pros
                        .split("\n")
                        .map((text)=>{
                              return(<p className="review_text-point">{text}</p>)
                         })
                }
              </div>
            }
            {cons && 
              <div className="review_text">
                <p className="review_text-bold">cons:</p>
                {
                        cons
                        .split("\n")
                        .map((text)=>{
                              return(<p className="review_text-point">{text}</p>)
                         })
                }
              </div>
            }
          </div>

              
          <div className="wrapper">
            { salary && 
                <div className="review_text">
                  <p className="review_text-bold">salary:{salary}</p>
                </div>
            }
            {mobileNo && 
                <div className="review_text">
                  <p className="review_text-bold">ContactNo:{mobileNo}</p>
                </div>
            }
          </div>
          {isEditing &&
            <div className="edit_icon">
              <i class="fas fa-trash-alt" onClick={()=>{deleteReview(_id)}}></i>
            </div>
          }
        </div>
    </>);

    }

export default ReviewCard;