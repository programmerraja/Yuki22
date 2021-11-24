import React from "react";

import userImg from "../../img/user.svg";

import "./style.css";

function ReviewCard({
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
                    user
                  }){
  return ( 
    <>
        <div className="review_container">
        <div className="wrapper">
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
            <div className="review_text">
              <p>No of rounds: 
                  <span className="review_text-bold">{rounds}</span>
              </p>
            </div>
            {
              Object.keys(roundsDetails).map((roundName,index)=>{
                return(
                  <div className="review_rounds">
                     <div className="review_text ">
                      <p className="review_text-bold">{index+1}.{roundName}</p>
                    </div>
                    <div className="review_text">
                    {
                      roundsDetails[roundName]
                      .split("\n")
                      .map((text)=>{
                            return(<p className="review_text-point">{text}</p>)
                       })
                    }
                    </div>
                  </div>
                  )
              })
            }
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
        </div>
    </>);

    }

export default ReviewCard;