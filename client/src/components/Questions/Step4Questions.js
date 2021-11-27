import React from "react";


function Step4Questions({is_placed,setIsPlaced}) {
   
return ( <>
                  <div  className="add_review-from">
                   <label for="isPlaced" className="add_review-label">
                   <span>Are you Placed in the company<span className="red_color"> *</span></span></label>
                         <div className="add_review-input-wrapper">
                           <select id="isPlaced" 
                                   className="add_review-input" 
                                   onChange={(e)=>{setIsPlaced(e.target.value);}}>
                              <option value="1" selected={is_placed==="1"?true:false}>Yes</option>
                              <option value="0" selected={is_placed==="0"?true:false}>No</option>
                            </select>
                         </div>
                   </div>
            
          </>);

}

export default Step4Questions;