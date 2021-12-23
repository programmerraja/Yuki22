import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { 
    Box,
    Paper,
    IconButton,
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

import {Delete} from "@material-ui/icons";
import { Pagination } from "@material-ui/lab";

import API from "../../utils/API";
import SquareLoader from "../../components/SquareLoader";
import errorHandler from "../../utils/errorHandler";

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

let isFind=1;

function Users(){
   
   const classes = useStyles();
   const [loading, setLoading] = useState(true);
   const[search_content,setSearchContent]=useState("");
   const [users,setUsers]=useState([]);
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(5);
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

   const deleteUser=(user_id)=>{
       swal({
      title: "Are you sure?",
      text: "You want to delete this review.",
      buttons: ["No", "Yes"],
      dangerMode: true,
    }).then((confirm) => {
      if (confirm) {
        setLoading(true);
        API.deleteUser(user_id)
        .then((res)=>{
            setLoading(false);
            if(res.data.status==="sucess"){
              let new_users=[]
              users.forEach(user_obj=>{
                if(user_obj._id!=user_id){
                  new_users.push(user_obj);
                }
              });
              setUsers(new_users);
              errorHandler(false,res.data.msg);
            }else{
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

  const search=(val)=>{
    let new_users=[...users]
    isFind=0;
    if(val===""){
      isFind=1;
    }
    new_users.forEach((usersObj)=>{
      if(!usersObj.name.toLowerCase().includes(val.toLowerCase())){
        usersObj.isShow=true;
      }
      else{
        isFind=1;
        usersObj.isShow=false;
      }
    })
    setUsers(new_users);
    setSearchContent(val);
  }

  return (
    <div>
      <SquareLoader loading={loading} />  
      <Box m={5}>
       <Container maxWidth="false">
      <Box m={1}>
        <h3 >All Users</h3>
				 <input type="text" 
				 		className="companies_search" 
				 		placeholder="Search here.."
				 		value={search_content}
				 		onChange={(e)=>{search(e.target.value)}}
				 />
      </Box>
      {(users.length>0 && !loading && isFind) &&
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
              {users.map((user) =>{
                 if(!user.isShow){
                    return (
                    <TableRow key={user._id} >
                      <Link to={`/yukiAdmin/user/userReviews/${user._id}`}>
                        <TableCell align="left" style={{"padding": "29px"}}>{user.name}</TableCell>
                      </Link>
                      <TableCell align="left">{user.email}</TableCell>
                      <TableCell align="left">{user.regno}</TableCell>
                      <TableCell align="left">{user.department}</TableCell>
                      <TableCell align="left">{user.isEmailVerified?"Yes":"No"}</TableCell>
                      <TableCell align="left">{new Date(user.createdAt).toDateString()}</TableCell>
                      <TableCell align="left" >
                      <IconButton aria-label="delete" onClick={()=>deleteUser(user._id)}>
                          <Delete />
                        </IconButton>
                          </TableCell>
                      
                    </TableRow>
                    )
                 }
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      }
      {(users.length===0 && !loading)  &&
            <h3>No Users Found</h3>
      }
      {!isFind && 
          (<div className="companies_content">
						    	<p className="companies_content-text">No users find with name {search_content}</p>
					</div>)
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