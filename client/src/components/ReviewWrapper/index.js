import {React,useState,useEffect} from "react";

import SquareLoader from  "../SquareLoader";
import Step1Questions from "../Questions/Step1Questions"
import Step2Questions from "../Questions/Step2Questions"
import Step3Questions from "../Questions/Step3Questions"
import Step4Questions from "../Questions/Step4Questions"
import Step5Questions from "../Questions/Step5Questions"

import API from "../../utils/API";
import errorHandler from "../../utils/errorHandler";

import "./style.css"

let isPrev=false;

function ReviewWrapper({onSucess,loading,setLoading,isEdit=false,reviewId=null}) {

   const [steps,setSteps]=useState(1);

   const [id,setId]=useState("");

   const [name,setName]=useState("");
   const [old_name,setOldName]=useState("");

   const [company_names,setCompanyNames]=useState([]);

   const [attended_on,setAttendedOn]=useState("");
   const [placement_type,setPlacementType]=useState("onCampus");
   const [off_campus_detail,setOffCampusDetail]=useState("");

   const [rounds,setRounds]=useState("");

   const [rounds_names,setRoundsNames]=useState([]);
   const [rounds_details,setRoundsDetails]=useState([]);

   const [is_placed,setIsPlaced]=useState(1);

   const [rating,setRating]=useState("");
   const [old_rating,setOldRating]=useState();

   const [pros,setPros]=useState("");
   const [cons,setCons]=useState("");
   const [salary,setSalary]=useState("");
   const [role,setRole]=useState("");

   const [mobile_no,setMobileNo]=useState("");
   const[is_anonymous,setIsAnonymous]=useState(false);

   useEffect(()=>{
       API.getCompanyNames()
      .then((res)=>{
        if(res.data.status==="sucess"){
              setCompanyNames(res.data.list);
             }
       })
       .catch((res)=>{
              setCompanyNames([]);
        });
       if(!isEdit){
          setReviewFromLocal()
       }
       
   },[])

   useEffect(()=>{
      if(reviewId){
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
               setRoundsNames(temp_rounds_names);

               let temp_rounds_details=[]
               temp_rounds_names.forEach((name)=>{
                  temp_rounds_details.push(temp_review.roundsDetails[name])
               })
               setRoundsDetails(temp_rounds_details);
               }
       })
       .catch((res)=>{
         res=res.response;
         setLoading(false);
         errorHandler(true,res.data.msg);
       });
    }
   },[reviewId])

   const setReviewFromLocal=()=>{
        let review=JSON.parse(localStorage.getItem("review"));
        if(review){
               setName(review["name"]?review["name"]:"");
               setAttendedOn(review["attended_on"]?review["attended_on"]:"");
               setPlacementType(review["placement_type"]?review["placement_type"]:"");
               setOffCampusDetail(review["off_campus_detail"]?review["off_campus_detail"]:"")
               setRounds(review["rounds"]?review["rounds"]:"");
               setRoundsDetails(review["rounds_details"]?review["rounds_details"]:"");
               setRoundsNames(review["rounds_names"]?review["rounds_names"]:"");
               setIsPlaced(review["is_placed"]?review["is_placed"]:"")
               setRating(review["rating"]?review["rating"]:"");
               setSalary(review["salary"]?review["salary"]:"");
               setPros(review["pros"]?review["pros"]:"");
               setCons(review["cons"]?review["cons"]:"");
               setMobileNo(review["mobile_no"]?review["mobile_no"]:"");
               setRole(review["role"]?review["role"]:"");
               setIsAnonymous(review["is_anonymous"]?review["is_anonymous"]:false);
               setSteps(review["steps"]?review["steps"]:1);
        }
   }
   

   const validateForm=()=>{
      if(steps===1){
        if(name && attended_on && placement_type){
          if(placement_type==="onCampus"){
            let review=JSON.parse(localStorage.getItem("review"));
            if(review){
              localStorage.setItem("review",JSON.stringify({...review,name,attended_on,placement_type,steps:2}))
            }else{
              localStorage.setItem("review",JSON.stringify({name,attended_on,placement_type,steps:2}))
            }
            return true;
            
          }else{
            if(off_campus_detail){
            //storing on local storage
            let review=JSON.parse(localStorage.getItem("review"));
            if(review){
              localStorage.setItem("review",JSON.stringify({...review,name,attended_on,placement_type,off_campus_detail,steps:2}))
            }else{
              localStorage.setItem("review",JSON.stringify({name,attended_on,placement_type,off_campus_detail,steps:2}))
            }
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
           //storing on local storage
           let review=JSON.parse(localStorage.getItem("review"));

           if(review){
              localStorage.setItem("review",JSON.stringify({...review,rounds,steps:3}))
            }else{
              localStorage.setItem("review",JSON.stringify({rounds,steps:3}))
            }
          return true
        }
        else{
          errorHandler(true,"No of rounds must greater then 0");
          return false
        }

      }
      if(steps===3){
        
        //it means user trying to remove one round so pop up out from array which above round
        //this bug fixed in feb 4   
        if(rounds_names.length>rounds){
          for(let i=rounds;i<rounds_names.length;i++){
            rounds_names.pop()
          }
        }
        if(rounds_details.length>rounds){
          for(let i=rounds;i<rounds_details.length;i++){
            rounds_details.pop()
          }
        }

        //converting rounds string to int by -0
        if(rounds_names.length===rounds-0 && rounds_details.length===rounds-0){
           //storing on local storage
            let review=JSON.parse(localStorage.getItem("review"));
            if(review){
              localStorage.setItem("review",JSON.stringify({...review,rounds_details,rounds_names,steps:4}))
            }else{
              localStorage.setItem("review",JSON.stringify({rounds_details,rounds_names,steps:4}))
            }
          return true
        }
        else{
          errorHandler(true,"Plse fill all the data");
          return false
        }

      }
      if(steps===4){
        if(parseInt(is_placed)===0 || parseInt(is_placed)===1){ 
           //storing on local storage
            let review=JSON.parse(localStorage.getItem("review"));
            if(review){
              localStorage.setItem("review",JSON.stringify({...review,is_placed,steps:5}))
            }else{
              localStorage.setItem("review",JSON.stringify({is_placed,steps:5}))
            }
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
             //storing on local storage
            let review=JSON.parse(localStorage.getItem("review"));
            if(review){
              localStorage.setItem("review",JSON.stringify({...review,rating,pros,cons,mobile_no,salary,role,is_anonymous,steps:5}))
            }else{
              localStorage.setItem("review",JSON.stringify({rating,pros,cons,mobile_no,salary,role,is_anonymous,steps:5}))
            }
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
      }
   }

   let onPrevious=()=>{
      if(steps-1===3){
        isPrev=true;
      }
      setSteps(steps-1);
   }
  
   let onSubitReview=()=>{
      setLoading(true);
      let rounds_detail={};
      for(let i=0;i<rounds_names.length;i++){
        rounds_detail[rounds_names[i]]=rounds_details[i]
      }
      let review_obj;
      if(placement_type==="onCampus"){
        review_obj={id,name,attended_on,
                        placement_type,rounds,
                        rounds_detail,is_placed,
                        rating,old_rating,pros,cons,
                        salary,mobile_no,role,is_anonymous
                      }
      }
      else{
        review_obj={id,name,attended_on,
                        placement_type,off_campus_detail,rounds,
                        rounds_detail,is_placed,
                        rating,old_rating,pros,cons,
                        salary,mobile_no,role,is_anonymous
                      }
      }

      if(!isEdit){
        API.submitReview=API.addMyReview;
      }else{
        API.submitReview=API.updateMyReview;
      }

      API.submitReview(review_obj)
      .then((res)=>{
             setLoading(false);
             if(res.data.status==="sucess"){
                  onSucess();               
             }
             else{
                 errorHandler(true,res.data.msg);
             }
       })
       .catch((res)=>{
         res=res.response;
         setLoading(false);
         errorHandler(true,res.data.msg);
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
            <div className="add_review-wrapper">
              <div className="add_review-container">
                    {questions_to_show} 
                    <div className="add_review-button">
                    {steps!==1?
                     <button onClick={onPrevious} >Previous</button>
                     :null 
                    }
                     {
                      steps===5 && isEdit?
                      <button onClick={onSubitReview}>Update</button>
                      :steps===5 ?
                      <button onClick={onSubitReview}>Add</button>:
                      <button onClick={onNext} >Next</button>
                     }
                    
                    </div>
              </div>
            </div>
          </>);

}

export default ReviewWrapper;