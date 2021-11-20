import React from "react";
import {useState,useEffect} from "react";
import {useHistory,Link } from "react-router-dom";

import SquareLoader from "../../components/SquareLoader";

import Rating from "../../components/Rating";


import API from "../../utils/API";

import "./style.css";



function Companies(){
  const [companiesList,setCompaniesList]=useState([{_id:1,name:"a",rating:5},{_id:2,name:"b",rating:4.5}]);

  const [loading,setLoading]=useState(true);

  const [msg,setMsg]=useState("");


  const history = useHistory();

  useEffect(()=>{
  	setLoading(false);
  },[])

  return ( 
    <>
    <SquareLoader  loading={loading}/>
    {
    	loading
    	?
    		null
    	:
	    	companiesList.length>0
	    	?
		    	(
		    		<div className="companiesContainer">
		    			<div>
		    			<h3>List of companies that has review</h3>
			    		{companiesList.map((companiesObj,index)=>
			    		{
			    			return(
			    				<div className="companiesContent">
			    				  <Link to={"/companies/"+companiesObj._id} className="link"> 
			    					<p>{index+1}.{companiesObj.name}</p>
			    				  </Link>
			    					<p><Rating number={companiesObj.rating}/> </p>
			    				</div>
			    			)
			    		})}
			    	</div>
			    	</div>

		    	)
	    	:
		    	(	
		    		<p> No Companies </p>
		    	)
    }
    
    </>);
 
  }

export default Companies;