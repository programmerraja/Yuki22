import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { 
    Box,
    Paper,
    Button,
    makeStyles,
    Grid ,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    Container
    } from "@material-ui/core";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Pagination } from "@material-ui/lab";

import API from "../../utils/API";
import SquareLoader from "../../components/SquareLoader";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    backnext:{
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "10px"
    },
     head: {
      fontWeight: 'bold',
  },
  });  

function Users(){
   
   const classes = useStyles();
   const [loading, setLoading] = useState(true);
   const [users,setUsers]=useState([]);
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(20);
   const [count, setCount] = useState(0);

   useEffect(() => {
    API.getAllUsers(page, limit)
      .then((res) => {
        setLoading(false);
        setUsers(res.data.users);
        setCount(res.data.count);
      })
      .catch((error) => {
        setLoading(false);
        setUsers([]);
        
      });
   }, []);

   useEffect(() => {
    setLoading(true);
    API.getAllUsers(page,limit)
      .then((res) => {
        setLoading(false);
        setUsers(res.data.users);
        setCount(res.data.count);
      })
      .catch((error) => {
        setLoading(false);
        setUsers([]);
        
      });
  }, [page,limit]);


  return (
    <div>
      <SquareLoader loading={loading} />  
      <Box m={5}>
       <Container maxWidth="false">
      <Box m={1}>
        <h3 >All Users</h3>
      </Box>
      {(users.length>0 && !loading) &&
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left"  className={classes.head}>Name</TableCell>
                <TableCell align="left" className={classes.head}>Email</TableCell>
                <TableCell align="left" className={classes.head}>Reg No</TableCell>
                <TableCell align="left" className={classes.head}>Department</TableCell>
                <TableCell align="left" className={classes.head}>Is Email Verified</TableCell>
                <TableCell align="left" className={classes.head}>Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <Link to={`/user/userReviews/${user._id}`}>
                    <TableCell align="left">{user.name}</TableCell>
                  </Link>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">{user.regno}</TableCell>
                  <TableCell align="left">{user.department}</TableCell>
                  <TableCell align="left">{user.isEmailVerified?"Yes":"No"}</TableCell>
                  <TableCell align="left">{new Date(user.createdAt).toDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
      {(users.length===0 && !loading)  &&
            <h3>No Users Found</h3>
      }
    </Container>
    {count > limit ? (
        <Pagination
          className="d-flex justify-content-center"
          count={
            count % limit === 0 ? count / limit : Math.floor(count / limit) + 1
          }
          page={page}
          onChange={(e, v) => setPage(v)}
        />
      ) : null}
    </Box>
  </div>
  );
};

export default Users;