import React from "react";

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
                    advice}){
  return ( 
    <>
        <div className="review_container">
        <div className="wrapper">
          <img src="" alt="dd"/>
          <p>UserName</p>
        </div>
          <div className="wrapper">
            <div className="review_text">
            <p>placement type:{placementType}</p>
            </div>
            <div className="review_text">
              <p>No of rounds:{rounds}</p>
            </div>
            {
              Object.keys(roundsDetails).map((roundName,index)=>{
                return(
                  <div>
                     <div className="review_text">
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
          </div>
              
          <div className="wrapper">
              <div className="review_text">
                <p className="review_text-bold">salary range:{salary}</p>
              </div>
              <div className="review_text">
                <p className="review_text-bold">ContactNo:{mobileNo}</p>
              </div>
          </div>
        </div>
    </>);

    }

export default ReviewCard;