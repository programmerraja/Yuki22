import React from "react";


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
                   <span>Rate the company out of 5 </span><span className="red_color"> *</span></label>
                         <div className="add_review-input-wrapper">
                          <input placeholder="rating"  
                                  name="rating"  
                                  className="add_review-input" 
                                  value={rating}
                                  onChange={(e)=>{setRating(e.target.value);}}
                                  />
                         </div>
                   </div>

                   <div  className="add_review-from">
                         <label for="pros" className="add_review-label">
                         <span>Write pros about the company </span></label>
                         <div className="add_review-input-wrapper">

                            <textarea placeholder="example:Good place to work, can learn lot" 
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
                         <span>Write cons about the company </span></label>
                         <div className="add_review-input-wrapper">
                            <textarea placeholder="example:less salary,high work pressure" 
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
                   <label for="salary" className="add_review-label">
                   <span>Salary range </span></label>
                         <div className="add_review-input-wrapper">
                           <input type="text"
                                  placeholder="15k-20k"  
                                  name="salary"  
                                  className="add_review-input" 
                                  value={salary}
                                  onChange={(e)=>{setSalary(e.target.value);}}
                                  />
                         </div>
                   </div>

                    <div  className="add_review-from">
                       <label for="mobile_no" className="add_review-label">
                       <span>Provide your mobile number for further enquires for students </span></label>
                         <div className="add_review-input-wrapper">
                           <input placeholder="mobile no"  
                                  name="mobile_no"  
                                  className="add_review-input" 
                                  value={mobile_no}
                                  onChange={(e)=>{setMobileNo(e.target.value);}}
                                  />
                         </div>
                   </div>
            
          </>);

}

export default Step5Questions;