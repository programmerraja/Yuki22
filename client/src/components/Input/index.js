import React from "react";


function Input({company_names,name,setName}) {
return (
  <>  
     <input list="browsers" 
            placeholder="Company Name"  
            name="companyName"  
            className="add_review-input" 
            value={name}
            onChange={(e)=>{setName(e.target.value);}}
            />
      <datalist id="browsers">
        {company_names.map((name)=>{
            return(<option value={name}/>)
        })}
       
      </datalist>
  </>
  );

}

export default Input;
