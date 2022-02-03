import React from "react";

import "./style.css";

function SquareLoader(props) {
  return (
    <div
      className="loader-wrapper"
      style={
        props.loading
          ? { display: "flex", marginTop: "0", ...props.style }
          : { display: "none", ...props.style }
      }
    >
    <div className="loader_container">
      <p className="loader">
        {props.msg?props.msg:"Loading....."}
      </p>
    </div>
    </div>
     
  );
}

export default SquareLoader;
