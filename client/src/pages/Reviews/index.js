import React from "react";
import {useState} from "react";
import {useHistory ,useParams,useEffect} from "react-router-dom";


import SquareLoader from "../../components/SquareLoader";


import API from "../../utils/API";

import "./style.css";



function Reviews(){
  const [reviews,setReviews]=useState("");
  const [loading,setLoading]=useState(true);

  const { compainesId } = useParams();

  const [msg,setMsg]=useState("");


  const history = useHistory();

   useEffect(()=>{
    setLoading(false);
  },[])

  
  return ( 
    <>
    <SquareLoader  loading={loading}/>
      
    
    </>);

  }

export default Reviews;