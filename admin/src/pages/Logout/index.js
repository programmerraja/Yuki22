import {useEffect} from "react";
import {useHistory } from "react-router-dom";

import API from "../../utils/API";

function Logout ({setUser}){
  const history = useHistory();

  useEffect(()=>{
  	localStorage.removeItem("token");
    API.logout();
    setUser(false);
    history.push("/signin");	
  },[]);

  return null
}

export default Logout;