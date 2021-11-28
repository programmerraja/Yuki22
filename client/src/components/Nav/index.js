import {React,createRef} from "react";

import {useHistory,Link } from "react-router-dom";

import "./style.css";

import logo from "../../img/logo.png";
import userImg from "../../img/user.svg";


function Nav({user}) {

  const nav_ref=createRef();
  const crosslines_ref=createRef();
  const line_ref=createRef();


  function toggle() {
    nav_ref.current.classList.toggle("nav_list_show");
    crosslines_ref.current.classList.toggle("crosslines_show");
    line_ref.current.classList.toggle("lines_hide");
  }

  let nav_link;

  if(user){
    nav_link=(<><div className="nav_link">
                    <Link onClick={toggle} to="/companies"> Companies </Link>
                </div>
                
                <div className="nav_link">
                    <Link onClick={toggle} to="/user/myReviews"> My Reviews </Link>
                </div>
                 <div className="nav_link">
                    <Link onClick={toggle} to="/user/addReview"> Add Review </Link>
                </div>
                <div className="nav_link">
                     <Link onClick={toggle} to="/user/logout"> Logout </Link>
                </div>
                <div className="nav_lin">
                  <Link onClick={toggle} to="/user/profile">
                  <img src={ userImg } className="user_img"/>
                  </Link>
                </div>
                </>);
  }
  else{
      nav_link=(<><div className="nav_link">
                    <Link onClick={toggle} to="/companies"> Compaines </Link>
                </div>
                <div className="nav_link">
                    <Link onClick={toggle} to="/user/addReview"> Add Review </Link>
                </div>
                <div className="nav_lin">
                  <Link onClick={toggle} to="/signin">
                    <img src={userImg} className="user_img"/>
                  </Link>
                </div></>);
    }

return ( <div className="nav">
              <div className="nav-brand">
                    <Link to="/">  
                        <img src={logo}/><p>Yuki22</p>                   
                    </Link>
              </div>

              <div className="lines" onClick={toggle} ref={line_ref}>  
                <div className="smallline">
                </div>
                <div className="smallline">
                </div>
                <div className="smallline">
                </div>
              </div>

              <div className="nav_list" ref={nav_ref}>
                <div className="crosslines" onClick={toggle} ref={crosslines_ref}>
                </div>
                {nav_link}
              </div>
        </div>);

}

export default Nav;
                // <img src={ logo } className="logo" />
