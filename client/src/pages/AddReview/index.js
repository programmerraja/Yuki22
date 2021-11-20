import React from "react";
import {useState,useEffect} from "react";

import Api from "../../utils/API";

import Step1Questions from "./step1Questions"
import Step2Questions from "./step2Questions"
import Step3Questions from "./step3Questions"
import Step4Questions from "./step4Questions"
import Step5Questions from "./step5Questions"




import "./style.css"

function UserProfile() {

   const [steps,setSteps]=useState(1);

   const [name,setName]=useState("");
   const [attended_on,setAttendedOn]=useState("");
   const [placement_type,setPlacementType]=useState("");


   const [rounds,setRounds]=useState();
   const [rounds_detail,setRoundsDetail]=useState({});

   const [is_placed,setIsPlaced]=useState(0);

   const [rating,setRating]=useState();
   const [pros,setPros]=useState("");
   const [cons,setCons]=useState("");
   const [salary,setSalary]=useState();
   const [mobile_no,setMobileNo]=useState("");
   const [advice,setAdvice]=useState("");

   let onNext=()=>{
      setSteps(steps+1);
   }

   let onPrevious=()=>{
      setSteps(steps-1);
   }
  
   let onSubitReview=()=>{
   }
                      
   let questions_to_show=null;
   if(steps===1){
      questions_to_show=(
                  <Step1Questions 
                        name={name}
                        attended_on={attended_on}
                        setName={setName}
                        setAttendedOn={setAttendedOn}
                        setPlacementType={setPlacementType}
                    />)
   }
   else if(steps===2){
      questions_to_show=(
                      <Step2Questions 
                          rounds={rounds}
                          setRounds={setRounds}
                      />)
   }
   else if(steps===3){
    let rounds_arr=[]
     for(let i=1;i<=rounds;i++){
         rounds_arr.push(
                      <Step3Questions  
                          round_number={i}
                          rounds_detail={rounds_detail}
                          setRoundsDetail={setRoundsDetail}
                          />)
     }
     questions_to_show=rounds_arr;
   }
   else if(steps===4){
    questions_to_show=(
                      <Step4Questions
                        setIsPlaced={setIsPlaced}
                      />)
   }
   else if(steps===5){
    questions_to_show=( 
                        <Step5Questions
                            rating={rating}
                            setRating={setRating}
                            pros={pros}
                            setPros={setPros}
                            cons={cons}
                            setCons={setCons}
                            salary={salary}
                            setSalary={setSalary}
                            mobile_no={mobile_no}
                            setMobileNo={setMobileNo}
                            advice={advice}
                            setAdvice={setAdvice}
                      />)
   }


return ( <>
            <div className="add_review-wrapper">
              <div className="add_review-container">
                    {questions_to_show}
                    <div className="add_review-button">
                     <button onClick={onPrevious} >Previous</button> 
                     {
                      steps==5?
                      <button onClick={onSubitReview}>Submit</button>
                      :
                      <button onClick={onNext} >Next</button>
                     }
                      
                    </div>
              </div>
            </div>
          </>);

}

export default UserProfile;