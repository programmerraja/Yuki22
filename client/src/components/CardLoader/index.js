import React from "react";

import "./style.css";

let style={
  marginTop: "1rem"
}
function CardLoader({loading,is_review}) {
  if(is_review){
    style={marginTop:"6.4rem"}
  }
  if(loading){
      return (
          <>

          {is_review &&
            <div className="companies_contents lcompanies_contents">
            </div>
          }
          <p className="text-small">Please wait while we fetching reviews</p>

           <div className="review_container lreview_container" style={style}>
              
              {!is_review &&
                <>
                <p className="company_name luser_text" style={{margin:"auto"}}></p>
                <p className="company_name luser_text"></p>
                  <div className="edit_icon">
                    <i className="fas fa-edit" style={{opacity:"0",margin:"0.7rem 0"}}></i>
                  </div>
                </>
              }
            <div className="wrapper">
            <div  className="user_wrapper">
              <div className="d-flex">
                <span className="user_img luser_img"/>
                <span className="luser_small-text"></span>
              </div>
            <p className="luser_text margin-0"></p>
          </div>
        </div>

          <div className="wrapper">
            <div className="review_text">
              <p className="luser_big-text2 margin-0"></p>
            </div>
            <div className="review_text ">
            <p className="luser_big-text5"></p>
            </div>
            <div className="review_text">
              <p className="luser_big-text1"></p>
            </div>
            <p className="luser_big-text3"></p>
              <div className="review_text">
                <p className="luser_big-text4"></p>
                <p className="luser_big-text2 round_name" ></p>
              </div>
          </div>
          <div className="wrapper">
              <div className="review_text">
                <p className="luser_big-text5"></p>
              </div>
              <div className="review_text">
                <p className="luser_big-text4"></p>
              </div>
          </div>

              
          <div className="wrapper">
                <div className="review_text">
                  <p className="luser_big-text1"></p>
                </div>
                <div className="review_text">
                  <p className="luser_big-text2"></p>
                </div>
                <div className="review_text">
                  <p className="luser_big-text3"></p>
                </div>
          </div>
            </div>  

        </>
      );
  }
  else{
    return null;
  }
}

export default CardLoader;
 