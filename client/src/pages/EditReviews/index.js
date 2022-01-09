import React from "react";
import {useState,useEffect} from "react";
import {useHistory,useParams } from "react-router-dom";

import SquareLoader from  "../../components/SquareLoader";

import Step1Questions from "../../components/Questions/Step1Questions"
import Step2Questions from "../../components/Questions/Step2Questions"
import Step3Questions from "../../components/Questions/Step3Questions"
import Step4Questions from "../../components/Questions/Step4Questions"
import Step5Questions from "../../components/Questions/Step5Questions"

import API from "../../utils/API";
import errorHandler from "../../utils/errorHandler";

import "./style.css"

let isPrev=false;

function EditReview() {

   const [steps,setSteps]=useState(1);
   const [error_msg,setErrorMsg]=useState();

   const [loading,setLoading]=useState(true);
   
   const [id,setId]=useState("");

   const [name,setName]=useState("");
   const [old_name,setOldName]=useState("");

   const [company_names,setCompanyNames]=useState([]);

   const [attended_on,setAttendedOn]=useState("");
   const [placement_type,setPlacementType]=useState("onCampus");
   const [off_campus_detail,setOffCampusDetail]=useState("");

   const [rounds,setRounds]=useState();

   const [rounds_names,setRoundsNames]=useState([]);
   const [rounds_details,setRoundsDetails]=useState([]);

   const [is_placed,setIsPlaced]=useState(1);

   const [rating,setRating]=useState();
   const [old_rating,setOldRating]=useState();

   const [pros,setPros]=useState("");
   const [cons,setCons]=useState("");
   const [salary,setSalary]=useState();
   const [role,setRole]=useState("");

   const [mobile_no,setMobileNo]=useState("");
   const[is_anonymous,setIsAnonymous]=useState(false);

   const history = useHistory();
   const { reviewId } = useParams();

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

       API.getMyReview(reviewId)
        .then((res)=>{
          setLoading(false);
          if(res.data.status==="sucess"){
               let temp_review=res.data.review;
               setId(temp_review._id); 
               setName(temp_review["name"]);
               setOldName(temp_review["name"]);
               setAttendedOn(temp_review["attendedOn"]);
               setPlacementType(temp_review["placementType"]);
               setOffCampusDetail(temp_review["offCampusDetail"])
               setRounds(temp_review["rounds"]);
               setIsPlaced(temp_review["isPlaced"])
               setRating(temp_review["rating"]);
               setOldRating(temp_review["rating"]);
               setSalary(temp_review["salary"]);
               setPros(temp_review["pros"]);
               setCons(temp_review["cons"]);
               setMobileNo(temp_review["mobileNo"]);
               setRole(temp_review["role"]);
               setIsAnonymous(temp_review["isAnonymous"])

               let temp_rounds_names=Object.keys(temp_review.roundsDetails)
              console.log(temp_rounds_names)
               setRoundsNames(temp_rounds_names);

               let temp_rounds_details=[]
               temp_rounds_names.forEach((name)=>{
                  temp_rounds_details.push(temp_review.roundsDetails[name])
               })

               setRoundsDetails(temp_rounds_details);


               }
       })
       .catch((res)=>{
          setLoading(false);
          if(res.data && res.data.msg){
              errorHandler(true,res.data.msg);
          }else{
            errorHandler(true);
            console.log(res)
          }
       });
   },[reviewId])

   let validateForm=()=>{
      if(steps===1){
        if(old_name!==name){
          setErrorMsg("Plse don't change company name if you like to change delete this review and create new one");
          return false
        }
        if(name && attended_on && placement_type){
          if(placement_type==="onCampus"){
           
            return true;
          }else{
            if(off_campus_detail){
              
              return true;
            }
            else{
              errorHandler(true,"Plse fill all the data");
              return false;
            }
          }
        }
        else{
          errorHandler(true,"Plse fill all the data");
          return false
        }

      }
      if(steps===2){
        if(parseInt(rounds)>0){
           return true;
        }
        else{
          errorHandler(true,"No of rounds must greater then 0");
          return false
        }

      }
      if(steps===3){
        //converting rounds string to int by -0
        if(rounds_names.length===rounds-0 && rounds_details.length===rounds-0){
          
          return true
        }
        else{
          errorHandler(true,"Plse fill all the data");
          return false
        }

      }
      if(steps===4){
        if(parseInt(is_placed)===0 || parseInt(is_placed)===1){ 
          return true
        }
        else{
          errorHandler(true,"Plse fill all the data");
          return false
        }

      }
      if(steps===5){
        if(rating){
          if(rating>=0 && rating<=5){
            
            return true
          }else{
            errorHandler(true,"rating must be between 0 and 5");
            return false
          }
        }
        else{
          errorHandler(true,"Plse fill all the data");
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
      setLoading(true);
      let rounds_detail={};
      for(let i=0;i<rounds_names.length;i++){
        rounds_detail[rounds_names[i]]=rounds_details[i]
      }
      let obj;
      if(placement_type==="onCampus"){
        obj={id,name,attended_on,
                        placement_type,rounds,
                        rounds_detail,is_placed,
                        rating,old_rating,pros,cons,
                        salary,mobile_no,role,is_anonymous
                      }
      }
      else{
        obj={id,name,attended_on,
                        placement_type,off_campus_detail,rounds,
                        rounds_detail,is_placed,
                        rating,old_rating,pros,cons,
                        salary,mobile_no,role,is_anonymous
                      }
      }
      API.updateMyReview(obj)
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
                          key={i} 
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
                            key={i}
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
                        is_placed={is_placed}
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
                            is_anonymous={is_anonymous}
                            setIsAnonymous={setIsAnonymous}
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
                    {steps!==1?
                     <button onClick={onPrevious} >Previous</button>
                     :null 
                    }
                     {
                      steps===5?
                      <button onClick={onSubitReview}>Update</button>
                      :
                      <button onClick={onNext} >Next</button>
                     }
                      
                    </div>
              </div>
            </div>
          </>);

}

export default EditReview;