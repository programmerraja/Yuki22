import React from "react";
import {Link } from "react-router-dom";

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
                    role,
                    user,
                    createdAt,
                    isEditing,
                    deleteReview
                  }){

  

  return ( 
    <>
        <div className="review_container">
        <div className="wrapper">
        {createdAt &&
          <p className="created_at">
            Posted on {new Date(createdAt).toDateString()}
          </p>
        }
        {isEditing &&
          <div className="edit_icon">
            <Link to={`/user/edit/review/${_id}`}>
             <i className="fas fa-edit"></i>
            </Link>
          </div>
        }
          <div  className="user_wrapper">
              <div className="d-flex">
                <img src={userImg} alt="user" className="user_img"/>
                {isPlaced===1 &&
                <span className="user_text-green">Placed</span>
                }
                {rating &&
                  <span className="user_text rating">
                  {rating.toFixed(1)}
                  <i className="far fa-star"></i></span>
                }
              </div>
            <p className="user_name">{user.name}({user.regno})</p>
            <span className="user_text-small">{user.department}</span>
          </div>
        </div>

          <div className="wrapper">
            <div className="review_text">
              <p className="margin-0">Attended On:
                <span className="review_text-bold">
                 {attendedOn}</span>
              </p>
            </div>
            <div className="review_text">
            <p>placement type:
              <span className="review_text-bold">
               {placementType}</span>
            </p>
            </div>
            <p className="review_text-bold">Interview Process</p>
            <div className="padding">
              <div className="review_text">
                <p>No of rounds: 
                    <span className="review_text-bold">{rounds}</span>
                </p>
              </div>
              {
                Object.keys(roundsDetails).map((roundName,index)=>{
                  return(
                    <div className="review_rounds" key={roundName}>
                    <details>
                        <summary className="review_text-bold round_name" >
                        {index+1}.{roundName}</summary>
                      <div className="review_text">
                      {
                        roundsDetails[roundName]
                        .split("\n")
                        .map((text,index)=>{
                              return(<p key={index} className="review_text-point">{text}</p>)
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
                        .map((text,index)=>{
                              return(<p key={index} className="review_text-point">{text}</p>)
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
                        .map((text,index)=>{
                              return(<p key={index} className="review_text-point">{text}</p>)
                         })
                }
              </div>
            }
          </div>

              
          <div className="wrapper">
            { salary && 
                <div className="review_text">
                  <p className="review_text-bold">Salary:{salary}</p>
                </div>
            }
            {role && 
                <div className="review_text">
                  <p className="review_text-bold">Role:{role}</p>
                </div>
            }
            {mobileNo && 
                <div className="review_text">
                  <p className="review_text-bold">Contact No:{mobileNo}</p>
                </div>
            }
          </div>
          {isEditing &&
            <div className="edit_icon">
              <i className="fas fa-trash-alt" onClick={()=>{deleteReview(_id)}}></i>
            </div>
          }
        </div>
    </>);

    }

export default ReviewCard;