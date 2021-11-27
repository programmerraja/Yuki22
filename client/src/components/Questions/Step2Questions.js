import React from "react";
import {useState,useEffect} from "react";

import Api from "../../utils/API";



function Step2Questions({rounds,setRounds}) {
   
return ( <>
                  <div  className="add_review-from">
                   <label for="rounds" className="add_review-label">
                   <span>How many Rounds <span className="red_color">*</span></span></label>
                         <div className="add_review-input-wrapper">
                          <input type="number"
                                  placeholder="How many rounds"  
                                  name="rounds"  
                                  className="add_review-input" 
                                  value={rounds}
                                  onChange={(e)=>{setRounds(e.target.value);}}/>
                         </div>
                   </div>
            
          </>);

}

export default Step2Questions;