import React from "react";
import {useState,useEffect} from "react";
import {useHistory } from "react-router-dom";

import SquareLoader from  "../../components/SquareLoader";

import Step1Questions from "../../components/Questions/Step1Questions"
import Step2Questions from "../../components/Questions/Step2Questions"
import Step3Questions from "../../components/Questions/Step3Questions"
import Step4Questions from "../../components/Questions/Step4Questions"
import Step5Questions from "../../components/Questions/Step5Questions"

import API from "../../utils/API";

import "./style.css"

let isPrev=false;

function AddReview() {

   const [steps,setSteps]=useState(1);
   const [error_msg,setErrorMsg]=useState();
   const [loading,setLoading]=useState(false);

   const [name,setName]=useState("");
   const [company_names,setCompanyNames]=useState([]);

   const [attended_on,setAttendedOn]=useState("");
   const [placement_type,setPlacementType]=useState("onCampus");
   const [off_campus_detail,setOffCampusDetail]=useState("");

   const [rounds,setRounds]=useState();

   const [rounds_names,setRoundsNames]=useState([]);
   const [rounds_details,setRoundsDetails]=useState([]);

   const [is_placed,setIsPlaced]=useState("1");

   const [rating,setRating]=useState();
   const [pros,setPros]=useState("");
   const [cons,setCons]=useState("");
   const [salary,setSalary]=useState();
   const [mobile_no,setMobileNo]=useState("");
   const [role,setRole]=useState("");

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
              setCompanyNames([]);
          }else{
              setCompanyNames([]);
          }
    });
   },[])

   let validateForm=()=>{
      if(steps===1){
        if(name && attended_on && placement_type){
          if(placement_type==="onCampus"){
            return true;
          }else{
            if(off_campus_detail){
              return true;
            }
            else{
              setErrorMsg("Plse fill all the data");
              return false;
            }
          }
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
        if(rounds_names.length===rounds-0 && rounds_details.length===rounds-0){
          return true
        }
        else{
          setErrorMsg("Plse fill all the data");
          return false
        }

      }
      if(steps===4){
        //converting rounds string to int by -0
        if(is_placed==="0" || is_placed==="1"){
          return true
        }
        else{
          setErrorMsg("Plse fill all the data");
          return false
        }

      }
      if(steps===5){
        if(rating){
          if(rating>=0 && rating<=5){
            return true
          }else{
            setErrorMsg("rating must be between 0 and 5");
          }
        }
        else{
          setErrorMsg("Plse fill all the data");
          return false
        }

      }
      
   }
   let onNext=()=>{
      if(steps+1===3){
        isPrev=false
      }
      if(validateForm()){
        setSteps(steps+1);
        setErrorMsg("");
      }
   }

   let onPrevious=()=>{
      if(steps-1===3){
        isPrev=true;
      }
      setSteps(steps-1);
      setErrorMsg("");
   }
  
   let onSubitReview=()=>{
      if(validateForm()){
          setLoading(true);
          let rounds_detail={};
          for(let i=0;i<rounds_names.length;i++){
            rounds_detail[rounds_names[i]]=rounds_details[i]
          }
          let obj;
          if(placement_type==="onCampus"){
            obj={name,
                attended_on,
                placement_type,rounds,
                rounds_detail,is_placed,
                rating,pros,cons,
                salary,mobile_no,
                role}
          }
          else{
            obj={name,
                attended_on,
                placement_type,off_campus_detail,rounds,
                rounds_detail,is_placed,
                rating,pros,cons,
                salary,mobile_no,
                role}
          }
          API.addMyReview(obj)
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
                        placement_type={placement_type}
                        setPlacementType={setPlacementType}
                        off_campus_detail={off_campus_detail}
                        setOffCampusDetail={setOffCampusDetail}
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
     if(rounds_details.length===rounds && isPrev){
      for(let i=0;i<rounds;i++){
         rounds_arr.push(
                      <Step3Questions  
                          round_number={i}
                          rounds_names={rounds_names}
                          setRoundsNames={setRoundsNames}
                          rounds_details={rounds_details}
                          setRoundsDetails={setRoundsDetails}
                          />)
      }
     }else{
       for(let i=0;i<rounds;i++){
           rounds_arr.push(
                        <Step3Questions  
                            round_number={i}
                            rounds_names={rounds_names}
                            setRoundsNames={setRoundsNames}
                            rounds_details={rounds_details}
                            setRoundsDetails={setRoundsDetails}
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
                            role={role}
                            setRole={setRole}
                      />)
   }


return ( <>
            <SquareLoader  loading={loading}/>
            <div className="header-content">
            <p className="heading">
                Write a Review
            </p>
            <p className="sub_title">
                Help junior's in choosing the right company and help them to placed in a company.
            </p>
            </div>
            <div className="add_review-wrapper">
            
              <div className="add_review-container">
                    {questions_to_show} 
                    <p className="add_review-error-msg">
                      {error_msg}
                    </p>
                    <div className="add_review-button">
                    {steps!==1?
                     <button onClick={onPrevious} >Previous</button>
                     :null 
                    }
                     {
                      steps===5?
                      <button onClick={onSubitReview}>Submit</button>
                      :
                      <button onClick={onNext} >Next</button>
                     }
                      
                    </div>
              </div>
            </div>
          </>);

}

export default AddReview;