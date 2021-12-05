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
                          role,
                          setRole
                        }) {
   
return ( <>
                  <div  className="add_review-from">
                   <label for="rating" className="add_review-label">
                   <span>Rate the company out of 5 </span><span className="red_color"> *</span></label>
                         <div className="add_review-input-wrapper">
                          <input type="number"
                                  placeholder="rating"  
                                  name="rating"  
                                  className="add_review-input" 
                                  value={rating}
                                  onChange={(e)=>{setRating(e.target.value);}}
                                  />
                         </div>
                   </div>

                   <div  className="add_review-from">
                         <label for="pros" className="add_review-label">
                         <span>What do you like about working at the company? </span></label>
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
                         <span>What do you dislike about working at the company?</span></label>
                         <div className="add_review-input-wrapper">
                          <span className="small_text">(Talk about teammates, training, job security, career growth, salary/appraisal, travel, politics, learning, work environment, innovation, work-life balance, etc.)
                            Please be polite & avoid using offensive language or defame people. This is a place for constructive feedback 😊</span>
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
                       <label for="role" className="add_review-label">
                       <span>What are roles that company offer for you or what role you currently working on. </span></label>
                         <div className="add_review-input-wrapper">
                           <input
                                  type="text" 
                                  placeholder="Software Developer/Web Developer.."  
                                  name="role"  
                                  className="add_review-input" 
                                  value={role}
                                  onChange={(e)=>{setRole(e.target.value);}}
                                  />
                         </div>
                   </div>

                    <div  className="add_review-from">
                       <label for="mobile_no" className="add_review-label">
                       <span>Provide your mobile number for further enquires for students </span></label>
                         <div className="add_review-input-wrapper">
                           <input
                                  type="number" 
                                  placeholder="mobile no"  
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