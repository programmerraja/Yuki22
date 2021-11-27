import {React,useState} from "react";


function Step1Questions({name,
                        attended_on,
                        setName,
                        setAttendedOn,
                        placement_type,
                        setPlacementType,
                        company_names
                      }) {

  const [showSuggestions, setShowSuggestions] = useState(false);

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  

   return ( <>
                
                  <div  className="add_review-from">
                   <label for="companyName" className="add_review-label">
                   <span>Company Name <span className="red_color">*</span></span></label>
                          <div className="add_review-input-wrapper">
                          <input  type="text" 
                                  placeholder="Company Name"  
                                  name="companyName"  
                                  className="add_review-input" 
                                  value={name}
                                  onChange={(e)=>{
                                      let new_suggestions=[]
                                      company_names.forEach(companyName=>{
                                          if(companyName.startsWith(name.toLowerCase())){
                                            new_suggestions.push(companyName);
                                          }
                                      })
                                      setFilteredSuggestions(new_suggestions);
                                      if(new_suggestions.length){
                                        setShowSuggestions(true);
                                      }
                                      else{
                                        setShowSuggestions(false);
                                      }
                                      setName(e.target.value);
                                    }}
                                  />
                              {showSuggestions && 
                                <ul className="suggestion_container" >  
                                {filteredSuggestions.map((companyName,index)=>{return(
                                  <li key={index} onClick={(e)=>{
                                    setName(e.target.innerText);
                                    setShowSuggestions(false);
                                  }}>{companyName}</li>)
                                })
                              }
                              </ul>}
                              
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