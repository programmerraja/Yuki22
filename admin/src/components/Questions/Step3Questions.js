import React from "react";
import {useState} from "react";

import Api from "../../utils/API";



function Step3Questions({round_number,
                  rounds_names,setRoundsNames,rounds_details,
                  setRoundsDetails}) {

    // const [roundName,setRoundName]=useState(round_name?round_name:"")
    
return ( <>
             <div  className="add_review-from">
                   <label for="roundsName" className="add_review-label">
                   <span>Enter Round {round_number+1} name <span className="red_color"> *</span></span></label>
                         <div className="add_review-input-wrapper">
                          <input type="text"
                                  placeholder="Aptitude / group discussion"  
                                  name="roundsName"  
                                  className="add_review-input" 
                                  value={rounds_names[round_number]}
                                  onChange={(e)=>{
                                    let newArr=[...rounds_names]
                                    newArr[round_number]=e.target.value
                                    setRoundsNames([...newArr]);}}/>
                         </div>
             </div>

             <div  className="add_review-from">
             <label for="roundDetail" className="add_review-label">
             <span>Round {round_number+1} <span className="red_color"> *</span></span></label>
                   <div className="add_review-input-wrapper">
                    <textarea placeholder="write full details about the round" 
                            rows="7"
                            cols="24" 
                            name="roundDetail"  
                            className="add_review-textarea" 
                            value={rounds_details[round_number]}
                            onChange={(e)=>{
                                    let newArr=[...rounds_details]
                                    newArr[round_number]=e.target.value;
                                    setRoundsDetails([...newArr]);
                            }}
                            >
                    </textarea>
                   </div>
             </div>
          </>);

}

export default Step3Questions;