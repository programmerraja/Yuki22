import {React,useState} from "react";

import Input from "../Input";

function Step1Questions({name,
                        attended_on,
                        setName,
                        setAttendedOn,
                        placement_type,
                        setPlacementType,
                        company_names
                      }) {

   return ( <>
                
                  <div  className="add_review-from">
                 
                   <label for="companyName" className="add_review-label">
                   <span>Company Name <span className="red_color">*</span></span></label>
                          <div className="add_review-input-wrapper">
                               <Input 
                                    name={name}
                                    setName={setName}
                                    company_names={company_names}/>
                         </div>
                   </div>

                   <div  className="add_review-from">
                   <label for="attendedOn" className="add_review-label">
                   <span>Attended the interview on year  <span className="red_color">*</span></span></label>
                         <div className="add_review-input-wrapper">
                          <input  type="number" 
                                  placeholder="attended on  year"  
                                  name="attendedOn"  
                                  className="add_review-input" 
                                  value={attended_on}
                                  onChange={(e)=>{setAttendedOn(e.target.value);}}
                                  />
                         </div>
                   </div>

                   <div  className="add_review-from">
                     <label for="placementType" className="add_review-label">
                     <span>Placement Type <span className="red_color">*</span></span></label>
                     <div className="add_review-input-wrapper">
                            <select id="placementType" 
                                    className="add_review-input" 
                                    onChange={(e)=>{setPlacementType(e.target.value);}}>
                              <option value="onCampus" selected={placement_type==="onCampus"?true:false}>on campus</option>
                              <option value="offCampus" selected={placement_type==="offCampus"?true:false}>off campus</option>
                            </select>
                           </div>
                   </div> 
          </>);

}

export default Step1Questions;