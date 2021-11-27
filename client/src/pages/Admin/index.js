import React from "react";
import {useState,useEffect} from "react";
import {useHistory,Link } from "react-router-dom";

import SquareLoader from "../../components/SquareLoader";

import API from "../../utils/API";
import errorHandler from "../../utils/errorHandler";


import "./style.css";


function Companies(){

  const [loading,setLoading]=useState(true);

  useEffect(()=>{
  	

  },[])
  


  if(!loading){
	  return ( 
	    <>
	    <SquareLoader  loading={loading}/>
				<p className="text-center font-weight-bold mt-2">Rider's</p>
				<div className="admin_container">
				  <div className="table table_rider">
				    <div className="tr table_head">
				      <div className="th">Name</div>
				      <div className="th">Created at</div>
				      <div className="th">Reg No</div>
				      <div className="th">Department</div>
				      <div className="th">Email</div>
				      <div className="th">Remove</div>
				      <div className="th">IsEmail</div>
				    </div>
				  </div>
				</div>
			    
	    </>);
	  }
	else{
		return ( 
	    <>
	    	<SquareLoader  loading={loading}/>
	    </>
	    )
	}
}

export default Companies;