import React from "react";

import "./style.css";

function Loader({loading}) {
  if(loading){
      return (
        <>
          <p className="text-small">Please wait while we fetching companies</p>
          <div className="companies_content-wrapper">
            <div className="lcompanies_content">
                <p className="lcompanies_content-text"></p>
            </div> 

            <div className="lcompanies_content" >
                <p className="lcompanies_content-text"></p>
            </div> 

            <div className="lcompanies_content" >
                <p className="lcompanies_content-text"></p>
            </div> 

            <div className="lcompanies_content" >
                <p className="lcompanies_content-text"></p>
            </div> 

            <div className="lcompanies_content" >
                <p className="lcompanies_content-text"></p>
            </div>  
          </div>
        </>
      );
  }
  else{
    return null;
  }
}

export default Loader;