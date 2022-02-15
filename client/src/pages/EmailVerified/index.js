import React from "react";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import SquareLoader from "../../components/SquareLoader";

import API from "../../utils/API";

import verifiy from "../../img/verifiy.svg";

function EmailVerified()
{
  const [loading,setLoading]=useState(true);
  const [verified,setVerified]=useState(false);
  
  const { userId } = useParams();

	function verfiyEmail(){
		API.verfiyEmail(userId)
    .then((res)=>{
        setLoading(false);
        if(res.data.status==="sucess"){
          setVerified(true);
        }else{
          setVerified(false);
        }
    })
    .catch((e)=>{
        setLoading(false);
        setVerified(false);
    })
	}
  
  useEffect(()=>{
    	verfiyEmail();
 	 },[])

return(
  <>
    <SquareLoader  loading={loading} msg={"Plse wait we verifiying your email"}/>
    { (!loading && verified) &&
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
    {(!loading && !verified) &&
      <div class="reset_container">
        <div class="reset_text">
          <h2>Email Verification failed</h2>
        </div>
      </div>

    }
  
</>);

}
export default EmailVerified;