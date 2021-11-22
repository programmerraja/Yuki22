import React from "react";

import "./style.css"

function Step4Questions({setIsPlaced}) {
   
return ( <>
                  <div  className="add_review-from">
                   <label for="isPlaced" className="add_review-label">
                   <span>Are you Placed in the company<span className="color_red"> *</span></span></label>
                         <div className="add_review-input-wrapper">
                           <select id="isPlaced" 
                                   className="add_review-input" 
                                   onChange={(e)=>{setIsPlaced(e.target.value);}}>
                              <option value="1">Yes</option>
                              <option value="0">No</option>
                            </select>
                         </div>
                   </div>
            
          </>);

}

export default Step4Questions;