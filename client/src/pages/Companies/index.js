import React from "react";
import {useState,useEffect} from "react";
import {useHistory,Link } from "react-router-dom";

import SquareLoader from "../../components/SquareLoader";

import API from "../../utils/API";

import "./style.css";



function Companies(){
  const [company_lists,setCompanyLists]=useState([]);
  const[search_content,setSearchContent]=useState("");

  const [loading,setLoading]=useState(true);

  const [msg,setMsg]=useState("");


  const history = useHistory();

  useEffect(()=>{
  	
  	API.getCompanyList()
  	.then((res)=>{
        if(res.data.status==="sucess"){
        	  setLoading(false);
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

  const search=(val)=>{
  		setSearchContent(val);
  		company_lists.forEach((companiesObj)=>{
  			if(!companiesObj.name.startsWith(val)){
  				companiesObj.isShow=true;
  			}
  			else{
  				companiesObj.isShow=false;
  			}
  		})
  }

  if(!loading){
	  return ( 
	    <>
	    <SquareLoader  loading={loading}/>
			<div className="companies_container">
				<div className="companies_search-wrapper">
				 <input type="text" 
				 		className="companies_search" 
				 		placeholder="Search.."
				 		value={search_content}
				 		onChange={(e)=>{search(e.target.value)}}
				 />
				</div>
			    	{
				    	 company_lists.length>0
				    	?
				    	(
				    		<>
					    		{company_lists.map((companiesObj,index)=>
					    		{
					    			if(!companiesObj.isShow){
						    			return(
						    				<div className="companies_content">
						    				  <Link to={"/company/reviews/"+companiesObj._id} className="link"> 
						    					<p className="companies_content-text">{index+1}.{companiesObj.name}</p>
						    				  </Link>
						    					<p>{companiesObj.rating/companiesObj.noOfReviews}<i class="far fa-star"></i> </p>
						    					<p>{companiesObj.noOfReviews}<i class="fas fa-user-friends"></i></p>
						    				</div>
						    			)
						    		}
					    		})}
					    	</>
				    	)
				    	:
				    	(	
				    	<div className="companiesContainer">
				    		<p> No companies found</p>
				    	</div>
				    	)
			    }
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