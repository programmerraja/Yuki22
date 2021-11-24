import React from "react";
import {useState,useEffect} from "react";
import {useHistory,Link } from "react-router-dom";

import SquareLoader from "../../components/SquareLoader";



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
		<div className="companies_container">
			<div className="companies_search-wrapper">
				<input type="text" className="companies_search" placeholder="Search.."/>
			</div>
		    	{
		    	loading
		    	?
		    		null
		    	:
			    	! loading && company_lists.length>0
			    	?
				    	(
				    		<>
					    		{company_lists.map((companiesObj,index)=>
					    		{
					    			return(
					    				<div className="companies_content">
					    				  <Link to={"/company/reviews/"+companiesObj._id} className="link"> 
					    					<p className="companies_content-text">{index+1}.{companiesObj.name}</p>
					    				  </Link>
					    					<p>{companiesObj.rating/companiesObj.noOfReviews}<i class="far fa-star"></i> </p>
					    					<p>{companiesObj.noOfReviews}<i class="fas fa-user-friends"></i></p>
					    				</div>
					    			)
					    		})}
					    	</>
				    	)
			    	:
				    	(	
				    	<div className="companiesContainer">
				    		<p> No Companies </p>
				    	</div>
				    	)
		    }
		 </div>
		    
    </>);
 
  }

export default Companies;