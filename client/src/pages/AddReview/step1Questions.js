import React from "react";

import "./style.css"

function Step1Questions({name,
                        attended_on,
                        setName,
                        setAttendedOn,
                        setPlacementType}) {

return ( <>
                
                  <div  className="add_review-from">
                   <label for="companyName" className="add_review-label">
                   <span>Company Name *</span></label>
                         <div className="add_review-input-wrapper">
                          <input placeholder="Company Name"  
                                  name="companyName"  
                                  className="add_review-input" 
                                  value={name}
                                  onChange={(e)=>{setName(e.target.value);}}
                                  />
                         </div>
                   </div>

                   <div  className="add_review-from">
                   <label for="attendedOn" className="add_review-label">
                   <span>Passed out year *</span></label>
                         <div className="add_review-input-wrapper">
                          <input placeholder="attended on  year"  
                                  name="attendedOn"  
                                  className="add_review-input" 
                                  value={attended_on}
                                  onChange={(e)=>{setAttendedOn(e.target.value);}}
                                  />
                         </div>
                   </div>

                   <div  className="add_review-from">
                     <label for="placementType" className="add_review-label">
                     <span>Placement Type *</span></label>
                     <div className="add_review-input-wrapper">
                            <select id="placementType" 
                                    className="add_review-input" 
                                    onChange={(e)=>{setPlacementType(e.target.value);}}>
                              <option value="onCampus">on campus</option>
                              <option value="offCampus">off campus</option>
                            </select>
                           </div>
                   </div> 
          </>);

}

export default Step1Questions;