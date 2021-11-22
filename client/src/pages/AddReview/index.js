import React from "react";
import {useState,useEffect} from "react";
import {useHistory } from "react-router-dom";

import SquareLoader from  "../../components/SquareLoader";

import Step1Questions from "./step1Questions"
import Step2Questions from "./step2Questions"
import Step3Questions from "./step3Questions"
import Step4Questions from "./step4Questions"
import Step5Questions from "./step5Questions"

import API from "../../utils/API";



import "./style.css"

function UserProfile() {

   const [steps,setSteps]=useState(1);
   const [error_msg,setErrorMsg]=useState();
   const [loading,setLoading]=useState(false);

   const [name,setName]=useState("");
   const [company_names,setCompanyNames]=useState([]);

   const [attended_on,setAttendedOn]=useState("");
   const [placement_type,setPlacementType]=useState("onCampus");


   const [rounds,setRounds]=useState();
   const [rounds_detail,setRoundsDetail]=useState({});

   const [is_placed,setIsPlaced]=useState(0);

   const [rating,setRating]=useState();
   const [pros,setPros]=useState("");
   const [cons,setCons]=useState("");
   const [salary,setSalary]=useState();
   const [mobile_no,setMobileNo]=useState("");
   const [advice,setAdvice]=useState("");

   const history = useHistory();


   useEffect(()=>{
      API.getCompanyNames()
      .then((res)=>{
        if(res.data.status==="sucess"){
              setCompanyNames(res.data.list);
             }
       })
       .catch((res)=>{
          if(res.data && res.data.list){
              setCompanyNames(res.data.list);
          }else{
              setCompanyNames(["unable to fetch list"]);
          }
    });
   },[])

   let validateForm=()=>{
      if(steps===1){
        if(name && attended_on && placement_type){
          return true
        }
        else{
          setErrorMsg("Plse fill all the data");
          return false
        }

      }
      if(steps===2){
        if(rounds){
          return true
        }
        else{
          setErrorMsg("Plse fill all the data");
          return false
        }

      }
      if(steps===3){
        //converting rounds string to int by -0
        if(Object.keys(rounds_detail).length===rounds-0){
          return true
        }
        else{
          setErrorMsg("Plse fill all the data");
          return false
        }

      }
      if(steps===4){
        //converting rounds string to int by -0
        if(is_placed===0 || is_placed===1){
          return true
        }
        else{
          setErrorMsg("Plse fill all the data");
          return false
        }

      }
      
   }
   let onNext=()=>{
      if(validateForm()){
        setSteps(steps+1);
        setErrorMsg("");
      }
   }

   let onPrevious=()=>{
      setSteps(steps-1);
      setErrorMsg("");
   }
  
   let onSubitReview=()=>{
      setLoading(true);
      API.addMyReview({name,attended_on,
                        placement_type,rounds,
                        rounds_detail,is_placed,
                        rating,pros,cons,
                        salary,mobile_no,
                        advice
                      })
      .then((res)=>{
             setLoading(false);
             if(res.data.status==="sucess"){
               history.push("/user/myReviews");
            
             }
             else{
                setErrorMsg(res.data.msg);
             }
       })
       .catch((res)=>{
          setLoading(false);
          if(res.data && res.data.msg){
            setErrorMsg(res.data.msg);
          }else{
            setErrorMsg("Something went wrong");
          }
    });
   }
                      
   let questions_to_show=null;
   if(steps===1){
      questions_to_show=(
                  <Step1Questions 
                        name={name}
                        company_names={company_names}
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
    let rounds_names=Object.keys(rounds_detail)
    console.log(rounds_names)
    // debugger;
     if(false){//rounds_names.length==rounds){
      // for(let i=1;i<=rounds;i++){
      //    rounds_arr.push(
      //                 <Step3Questions  
      //                     round_number={i}
      //                     round_name={rounds_names[i-1]}
      //                     rounds_detail={rounds_detail[rounds_names[i-1]]}
      //                     setRoundsDetail={setRoundsDetail}
      //                     />)
     }else{
       for(let i=1;i<=rounds;i++){
           rounds_arr.push(
                        <Step3Questions  
                            round_number={i}
                            rounds_detail={rounds_detail}
                            setRoundsDetail={setRoundsDetail}
                            />)
       }
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
            <SquareLoader  loading={loading}/>
            <div className="add_review-wrapper">
              <div className="add_review-container">
                    {questions_to_show} 
                    <p className="add_review-error-msg">
                      {error_msg}
                    </p>
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