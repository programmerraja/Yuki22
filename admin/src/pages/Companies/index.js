import React from "react";
import {useState,useEffect} from "react";
import {useHistory,Link } from "react-router-dom";
import swal from "sweetalert";
import {Box,Container} from "@material-ui/core";

import SquareLoader from "../../components/SquareLoader";

import API from "../../utils/API";
import errorHandler from "../../utils/errorHandler";

import "./style.css";

const querys={
	hrating:{value:"rating",type:-1},
	lrating:{value:"rating",type:1},
	hreview:{value:"review",type:-1},
	lreview:{value:"review",type:1},
	hname:{value:"name",type:-1},
	lname:{value:"name",type:1}
}

function Companies(){
  const [company_lists,setCompanyLists]=useState([]);
  const[search_content,setSearchContent]=useState("");
  const[sort_by,setSortBy]=useState();

  const [loading,setLoading]=useState(true);
  let isFind=0;

  useEffect(()=>{
  	API.getCompanyList()
  	.then((res)=>{
        if(res.data.status==="sucess"){
        	  setLoading(false);
              setCompanyLists(res.data.list);
         }
         else{
         	errorHandler(true,res.data.msg);
         }
   	})
   	.catch((res)=>{
      setLoading(false);
      if(res.data && res.data.msg){
         	errorHandler(true,res.data.msg);
      }else{
         	errorHandler(true);
      }
    });

  },[])

  const sortedCompanyList=(sort_by)=>{
  	if(sort_by){
	  	let query={...querys[sort_by]}
	  	API.getSortedCompanyList(query)
	  	.then((res)=>{
	        if(res.data.status==="sucess"){
	        	  setLoading(false);
	              setCompanyLists(res.data.list);
	         }
	         else{
	         	errorHandler(true,res.data.msg);
	         }
	   	})
	   	.catch((res)=>{
	      setLoading(false);
	      if(res.data && res.data.msg){
	         	errorHandler(true,res.data.msg);
	      }else{
	         	errorHandler(true);
	      }
	    });
	}
  }

  const search=(val)=>{
  		setSearchContent(val);
  		company_lists.forEach((companiesObj)=>{
  			console.log(companiesObj.name.startsWith(val.toLowerCase()))
  			if(!companiesObj.name.toLowerCase().startsWith(val.toLowerCase())){
  				companiesObj.isShow=true;
  			}
  			else{
  				companiesObj.isShow=false;
  			}
  		})
  }

 const deleteCompany=(company_id)=>{
     swal({
      title: "Are you sure?",
      text: "You want to delete this company.",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then((confirm) => {
      if (confirm) {
        setLoading(true);
        API.deleteCompany(company_id)
        .then((res)=>{
            setLoading(false);
            if(res.data.status==="sucess"){
              let new_company=[]
              company_lists.forEach(company_obj=>{
                if(company_obj._id!=company_id){
                  new_company.push(company_obj)
                }
              });
              setCompanyLists(new_company);
              errorHandler(false,res.data.msg);
            }
        
        })
        .catch((res)=>{
          setLoading(false);
          if(res.data && res.data.msg){
              errorHandler(true,res.data.msg);
          }else{
              errorHandler(true);
          }
        });
    }
    });
  }

  if(!loading){
	  return ( 
	    <>
	    <SquareLoader  loading={loading}/>
			<div className="companies_container">
				<div className="companies_search-wrapper">
				 <input type="text" 
				 		className="companies_search" 
				 		placeholder="Search here.."
				 		value={search_content}
				 		onChange={(e)=>{search(e.target.value)}}
				 />
				 <div className="filter_option-wrapper">
					 <label className="filter_option-label">
	                   <span>Sort By: </span></label>
					   <select
	                          className="filter_option" 
	                          onChange={(e)=>{
	                          	setSortBy(e.target.value);
	                          	sortedCompanyList(e.target.value);}}>
		                  <option value="">None</option>
		                  <option value="hrating">Rating High to Low</option>
		                  <option value="lrating">Rating Low to High</option>
		                  <option value="hreview">Reviews High to Low</option>
		                  <option value="lreview">Reviews Low to High</option>
		                  <option value="lname">Name(asec)</option>
		                  <option value="hname">Name(desc)</option>
	                 </select>
                 </div>
				</div>
			    	{
				    	 company_lists.length>0
				    	?
				    	(
				    		<div className="companies_content-wrapper">
					    		{company_lists.map((companiesObj,index)=>
					    		{
					    			if(!companiesObj.isShow){
					    				isFind=1;
						    			return(
						    				<div className="companies_content" key={companiesObj.name}>
						    				  <Link to={"/yukiAdmin/company/reviews/"+companiesObj._id} className="link flex2"> 
						    					<p className="companies_content-text ">{index+1}.{companiesObj.name}</p>
						    				  </Link>
						    					<p className="companies_content-rating flex1">{companiesObj.rating && companiesObj.noOfReviews?(companiesObj.rating/companiesObj.noOfReviews).toFixed(1):0}<i className="far fa-star"></i> </p>
						    					<p className="companies_content-review flex1">{companiesObj.noOfReviews}<i className="fas fa-user-friends"></i></p>
						    					 <div className="edit_icon">
									             	 <i className="fas fa-trash-alt" onClick={()=>{deleteCompany(companiesObj._id)}}></i>
									             </div>
						    				</div>
						    			)
						    		}
					    		})

					    	}
					    	{!isFind && (<div className="companies_content">
						    					<p className="companies_content-text">No compaines find with name {search_content}</p>
						    				</div>)}
						   </div>
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