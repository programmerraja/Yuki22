import React from "react";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import SquareLoader from "../../components/SquareLoader";

import API from "../../utils/API";

import verifiy from "../../img/verifiy.svg";

function EmailVerified()
{
	
  const [loading,setLoading]=useState(true);
  
  const { userId } = useParams();

	function verfiyEmail(){
		API.verfiyEmail(userId)
    .then((res)=>{
        if(res.data.status==="sucess"){
          setLoading(false)
        }
    })
	}
  
  useEffect(()=>{
    	verfiyEmail();
 	 },[])

return(
<>
  
    <SquareLoader  loading={loading}/>
    { !loading &&
      <div class="reset_container">
        <div class="reset_img">
          <img src={verifiy} />
        </div>
        <div class="reset_text">
          <h2>Verified!</h2>
          <p>You have sucessfully verified the account </p>
        </div>
      </div>
    }
  
</>);

}
export default EmailVerified;