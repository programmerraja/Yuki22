import React from "react";

import "./style.css"

function Step5Questions({ rating,
                          setRating,
                          pros,
                          setPros,
                          cons,
                          setCons,
                          salary,
                          setSalary,
                          mobile_no,
                          setMobileNo,
                          advice,
                          setAdvice
                        }) {
   
return ( <>
                  <div  className="add_review-from">
                   <label for="rating" className="add_review-label">
                   <span>Rate your company out of 5 *</span></label>
                         <div className="add_review-input-wrapper">
                          <input placeholder="How may rounds"  
                                  name="rating"  
                                  className="add_review-input" 
                                  value={rating}
                                  onChange={(e)=>{setRating(e.target.value);}}
                                  />
                         </div>
                   </div>

                   <div  className="add_review-from">
                         <label for="pros" className="add_review-label">
                         <span>Write Pros about your company *</span></label>
                         <div className="add_review-input-wrapper">

                            <textarea placeholder="Passed out year" 
                                rows="7"
                                cols="24" 
                                name="pros"  
                                className="add_review-textarea" 
                                value={pros}
                                onChange={(e)=>{setPros(e.target.value);}}
                                >
                             </textarea>
                         </div>
                   </div>
                   <div  className="add_review-from">
                         <label for="cons" className="add_review-label">
                         <span>Write Pros about your company *</span></label>
                         <div className="add_review-input-wrapper">
                            <textarea placeholder="Passed out year" 
                                rows="7"
                                cols="24" 
                                name="cons"  
                                className="add_review-textarea" 
                                value={cons}
                                  onChange={(e)=>{setCons(e.target.value);}}
                                >
                             </textarea>
                         </div>
                   </div>

                  <div  className="add_review-from">
                   <label for="isPlaced" className="add_review-label">
                   <span>Salary provided by the company *</span></label>
                         <div className="add_review-input-wrapper">
                           <input placeholder="How may rounds"  
                                  name="companyName"  
                                  className="add_review-input" 
                                  value={salary}
                                  onChange={(e)=>{setSalary(e.target.value);}}
                                  />
                         </div>
                   </div>

                    <div  className="add_review-from">
                       <label for="isPlaced" className="add_review-label">
                       <span>Provide your mobile number for further enquires by students </span></label>
                         <div className="add_review-input-wrapper">
                           <input placeholder="How may rounds"  
                                  name="companyName"  
                                  className="add_review-input" 
                                  value={mobile_no}
                                  onChange={(e)=>{setMobileNo(e.target.value);}}
                                  />
                         </div>
                   </div>
            
          </>);

}

export default Step5Questions;