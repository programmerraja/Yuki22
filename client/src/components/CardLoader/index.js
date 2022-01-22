import React from "react";

import "./style.css";

function SquareLoader({loading}) {
  if(loading){
      return (
          <>
          <div className="companies_contents lcompanies_contents">
            </div>
           <div className="review_container lreview_container">
               <div  className="lwrapper">
                  <div className="ld-flex">
                    <span  className="luser_img user_img"></span>
                    <p  className="luser_text user_name"></p>
                  </div>
                </div>

                <div className=" lwrapper2">
                    <p className="luser_big-text1 luser_text"></p>
                    <p className="luser_big-text2 luser_text"></p>
                    <p className="luser_big-text3 luser_text"></p>
                    <p className="luser_big-text4 luser_text"></p>
                    <p className="luser_big-text5 luser_text"></p>
                </div>
            </div>  
             <div className="review_container">
               <div  className="lwrapper">
                  <div className="ld-flex">
                    <span  className="luser_img user_img"></span>
                    <p  className="luser_text user_name"></p>
                  </div>
                </div>

                <div className=" lwrapper2">
                    <p className="luser_big-text1 luser_text"></p>
                    <p className="luser_big-text2 luser_text"></p>
                    <p className="luser_big-text3 luser_text"></p>
                    <p className="luser_big-text4 luser_text"></p>
                    <p className="luser_big-text5 luser_text"></p>
                </div>
            </div>  

        </>
      );
  }
  else{
    return null;
  }
}

export default SquareLoader;
