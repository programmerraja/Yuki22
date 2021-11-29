import React, { useState ,useEffect} from "react";
import Box from "@material-ui/core/Box";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import API from "../../utils/API";

import "./style.css";


export default function Home(props) {
 const [user_count, setUserCount] = useState("...");
 const [review_count, setReviewCount] = useState("...");
 const [company_count, setCompanyCount] = useState("...");

 const theme = useTheme();
 const matches = useMediaQuery('(max-width:800px)');

  useEffect(() => {
    API.getCounts()
      .then((res) => {
        if(res.data.status==="sucess"){
          setUserCount(res.data.user_count);
          setReviewCount(res.data.review_count);
          setCompanyCount(res.data.company_count);
        }else{
          setUserCount("Failed");
          setReviewCount("Failed");
          setCompanyCount("Failed");
        }
      })
      .catch((error) => {
          setUserCount("Failed");
          setReviewCount("Failed");
          setCompanyCount("Failed");
      });
  }, []);

  return (
    <div className="homepage_container">
      <Box display="flex" flexDirection ={ matches ? "column" : "row" } justifyContent = "space-around" alignItems = "center" >
        <Box p={4} mx={10} lg={2} width={ matches ? "160px" : "200px" } border={1}  
        align="center" margin={matches ? "10px" : 0}>
          <Box mb={3}>TOTAL USERS</Box>
          <h2 >{user_count}</h2>
        </Box>

        <Box p={4} mx={10} lg={2} width={ matches ? "160px" : "200px" } border={1} align="center" margin={matches ? "10px" : 0}>
          <Box mb={3}>TOTAL REVIEW COUNT</Box>
          <h2 >{review_count}</h2>
        </Box>

        <Box p={4} mx={10} lg={2} width={ matches ? "160px" : "200px" } border={1} align="center" margin={matches ? "10px" : 0}>
          <Box mb={3}>TOTAL COMPAINES</Box>
          <h2 >{company_count}</h2>
        </Box> 
      </Box>       
    </div>
  );
}
