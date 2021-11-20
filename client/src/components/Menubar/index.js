/*
  this is our navigation bar  only for home page 
*/
import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Avatar from '@material-ui/core/Avatar'
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link, useHistory,useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import API from "../../utils/API";
import { fetchCart } from "../../redux/asyncRequests/cartRequest";
import { getUnreadNotificationCount } from "../../redux/asyncRequests/notificationRequest";
import { logoutUserSuccess } from "../../redux/slices/userSlice";
import {makeEmptyCart} from "../../redux/slices/cartSlice";
// import Zang from "../../images/zang green(latest).png"
import Zang from "../../images/zang white.png"

import "./style.css";
import COLOR from "../../Style"



const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: '#00442f',
    color:"white"
  },
  big: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: 'white',
    color:"#00442f"
  },
}));

  
const Style={
  jumbotron:{width:"100vw",zIndex:10000},
  navbar:{width:"85%"},
  positionRelative:{position:"relative"},
  color:{color:"#144f3d"}
}

function HomeNav(props) {

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [navbar, setNavbar] = useState(true)

  const classes = useStyles()
  const cart = useSelector((state) => state.cartSlice.cart);
  //getting unread notification from global state
  const UnreadNotificationCount = useSelector((state) => state.notificationSlice.notifications.UnreadNotificationCount);
  const noOfItem = cart.products?Object.keys(cart.products).length:null;
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = props;

  //run this whenever user change 
  React.useEffect(() => {
    //call only if user is sigin  
    if(user){
      //to avoid error Can’t perform a React state update on an unmounted component.
      const abortCtrl = axios.CancelToken.source();
      const opts = { signal: abortCtrl.token };
      dispatch(getUnreadNotificationCount(opts));
      //if we not get Cached only call the function
      if(!cart.isCached){
        dispatch(fetchCart(opts));
      }
      return () => abortCtrl.cancel();
    }
  }, [user]);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const changeBackground =React.useCallback(event => {
      if(window.scrollY >= window.innerHeight){
        setNavbar(true)
      } else if (window.screen.availWidth > 990) {
        setNavbar(false);
      } 
  }, []); 

  React.useEffect(()=>{
    if(location.pathname === "/" ) {
       window.addEventListener('scroll', changeBackground);
       
       if (window.screen.availWidth > 990) {
        setNavbar(false);
      }

       return () => {
            window.removeEventListener('scroll',changeBackground);
        };
    }
    else{
      setNavbar(true);
    }
  },[location])


  const logOut = () => {
    API.logout()
      .then((res) => {
        dispatch(logoutUserSuccess());
        //make cart clean 
        dispatch(makeEmptyCart());
        API.removeAuthHeader();
        history.push("/");
      })
      .catch(error => {
        console.log(error);
        if(error.response && error.response.data && error.response.data.message){
           swal({
            title: "Error",
            text: error.response.data.message,
            icon: "errror"
           });
        }
        else {
          swal({
            title: "Error",
            text: "Some Error Occured. Try Again!!",
            icon: "error",
          });
        }
      })
  };
  
  return (
    <Jumbotron fluid className={navbar? "jumbotron fixed-top" :'jumbotron'} style={Style.jumbotron}>
      <Navbar expand="lg" variant="light" className={navbar ? 'menubar active ': 'menubar'}>
      {/* <Navbar expand="lg" variant="light" className="menubar color-nav"> */}
        <Link to="/" className="logo">
          <Navbar.Brand>
            <div className={navbar?"zangGreen zang":"zangWhite zang"} ></div>
          </Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={Style.navbar}>
          <Nav className="align-items-center navLinks">
          <div className="navLinkWrapper">
            <Nav.Link
              className="navBarProducts text-center"
              id="navstyle1"
              onClick={() => {
                history.push("/products");
              }}
            >
              PRODUCTS
            </Nav.Link>

            <Nav.Link
              className="navBarProducts text-center"
              onClick={() => {
                history.push("/aboutUs");
              }}
              id="navstyle1"
            >
              ABOUT US
            </Nav.Link>
          </div>
            {user ? (
              <>
                <Nav.Link
                  className="navBarLogOut text-center"
                  id="navstyle2"
                  onClick={logOut}
                  href="#"
                >
                  LOGOUT
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  className="navBarLogIn text-center"
                  id="navstyle2"
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  LOG IN
                </Nav.Link>

                <Nav.Link
                  className="navBarRegister text-center"
                  id="navstyle2"
                  onClick={() => {
                    history.push("/signup");
                  }}
                >
                  REGISTER
                </Nav.Link>
              </>
            )}

            <IconButton
              className={navbar ?"text-success":"text-white"}
              aria-label="shopping cart"
              onClick={() => {
                history.push("/cart");
              }}
              style={Style.positionRelative}
            >
              <span className={noOfItem?"badge":"d-none"}>{noOfItem}</span>
              <ShoppingCartOutlinedIcon htmlColor="#00442f" className={!navbar ?"text-white":""}/>
            </IconButton>

            {user ? (
              <IconButton
                className={navbar ?"text-success":"text-white"}
                aria-label="shopping cart"
                onClick={() => {
                  history.push("/notification");
                }}
                style={Style.positionRelative}
              >
                <NotificationsIcon className={navbar ?"text-success":"text-white"} />
                <span className={UnreadNotificationCount?"badge":"d-none"}>
                  {UnreadNotificationCount}
                </span>
              </IconButton>
            ) : (<></>)}
            
            <IconButton
              className="text-success"
              style={ Style.color}
              aria-label="shopping cart"
              onClick={() => {
                history.push("/profile");
              }}
            >
              {props.user && props.user.username
                ? <Avatar className={navbar?classes.small:classes.big} >{props.user.username[0]}</Avatar>
                : <AccountCircleIcon htmlColor="#00442f"  className={navbar ?"text-success":"text-white"} />
              }
            </IconButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Jumbotron>
  );
}

export default React.memo(HomeNav);