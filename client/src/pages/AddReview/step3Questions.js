import React from "react";
import {useState} from "react";

import Api from "../../utils/API";


import "./style.css"

function Step3Questions({round_number,round_name,rounds_detail,setRoundsDetail}) {
    const [roundName,setRoundName]=useState(round_name?round_name:"")

return ( <>
             <div  className="add_review-from">
                   <label for="roundsName" className="add_review-label">
                   <span>Enter Round {round_number} name <span className="color_red"> *</span></span></label>
                         <div className="add_review-input-wrapper">
                          <input type="text"
                                  placeholder="Aptitude / group discussion"  
                                  name="roundsName"  
                                  className="add_review-input" 
                                  value={roundName}
                                  onChange={(e)=>{setRoundName(e.target.value);}}/>
                         </div>
             </div>

             <div  className="add_review-from">
             <label for="roundDetail" className="add_review-label">
             <span>Round {round_number} <span className="color_red"> *</span></span></label>
                   <div className="add_review-input-wrapper">
                    <textarea placeholder="write full details about the round" 
                            rows="7"
                            cols="24" 
                            name="roundDetail"  
                            className="add_review-textarea" 
                            value={rounds_detail[roundName]?rounds_detail[roundName]:""}
                            onChange={(e)=>{setRoundsDetail({...rounds_detail,[roundName]:e.target.value});}}
                            >
                    </textarea>
                   </div>
             </div>
          </>);

}

export default Step3Questions;