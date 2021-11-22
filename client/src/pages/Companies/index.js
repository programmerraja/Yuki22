import React from "react";
import {useState,useEffect} from "react";
import {useHistory,Link } from "react-router-dom";

import SquareLoader from "../../components/SquareLoader";

import Rating from "../../components/Rating";


import API from "../../utils/API";

import "./style.css";



function Companies(){
  const [company_lists,setCompanyLists]=useState([]);

  const [loading,setLoading]=useState(true);

  const [msg,setMsg]=useState("");


  const history = useHistory();

  useEffect(()=>{
  	setLoading(false);
  	API.getCompanyList()
  	.then((res)=>{
        if(res.data.status==="sucess"){
              setCompanyLists(res.data.list);
         }
         else{
          setMsg(msg);
         }
   	})
   	.catch((res)=>{
      if(res.data && res.data.msg){
          setMsg(msg);
      }else{
          setMsg("unable to fetch list");
      }
    });

  },[])

  return ( 
    <>
    <SquareLoader  loading={loading}/>
    {
    	loading
    	?
    		null
    	:
	    	company_lists.length>0
	    	?
		    	(
		    		<div className="companiesContainer">
		    			<div>
		    			<h3>List of companies that has review</h3>
			    		{company_lists.map((companiesObj,index)=>
			    		{
			    			return(
			    				<div className="companiesContent">
			    				  <Link to={"/company/reviews/"+companiesObj._id} className="link"> 
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