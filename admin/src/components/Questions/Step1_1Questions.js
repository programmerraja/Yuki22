import {React,useState} from "react";

import Input from "../Input";

function Step1_1Questions({off_campus_detail,setOffCampusDetail}) {

   return ( <>
                
                  <div  className="add_review-from">
                 
                   <label for="off_campus_detail" className="add_review-label">
                   <span>Plse Explain how you get the opportunity for the off campus? <span className="red_color">*</span></span></label>
                          <div className="add_review-input-wrapper">
                              <textarea placeholder="write full details about the round" 
                                    rows="7"
                                    cols="24" 
                                    name="off_campus_detail"  
                                    className="add_review-textarea" 
                                    value={off_campus_detail}
                                    onChange={(e)=>{
                                           setOffCampusDetail(e.target.value);
                                  }}
                                >
                             </textarea>
                         </div>
                   </div> 
          </>);

}

export default Step1_1Questions;