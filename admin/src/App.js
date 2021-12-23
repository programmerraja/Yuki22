
import {React,useState} from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Sidebar from "./components/Sidebar";

//components
import Nav from "./components/Nav";
import SquareLoader from './components/SquareLoader';

//pages
import Home from './pages/Home';
import Companies from './pages/Companies';


import Signin from "./pages/Signin";

import AddReview from "./pages/AddReview";
import Reviews from "./pages/Reviews";
import UserReviews from "./pages/UserReviews";
import EditReviews from "./pages/EditReviews";
import Users from "./pages/Users";



import Logout from "./pages/Logout";
// import NotFound from "./pages/NotFound";

//utils
import ProtectedRoute from './utils/ProtectedRoute';

import API from "./utils/API";

//styles
import './App.css';

function App(props) {

  const [user,setUser]=useState(API.isAuth());

  return (
    <>
      
      <Router>
      <Nav user={API.isAuth()}/>
        <div className="d-flex">
        <Sidebar />
        <div
            style={{
              maxWidth: "calc(100vw - 80px)",
              width:"100%"
            }}
          >
        <Switch>
          <ProtectedRoute exact path="/yukiAdmin" component={Home}/>

          <ProtectedRoute exact path="/yukiAdmin/signin" component={()=>{return(<Signin setUser={setUser}/>)}}/>
          <ProtectedRoute exact path="/yukiAdmin/companies" component={Companies} />
          <ProtectedRoute exact path="/yukiAdmin/company/reviews/:companyId"  component={Reviews}/>

          <ProtectedRoute path="/yukiAdmin/user/logout"  component={()=>{return(<Logout setUser={setUser}/>)}}/>
          <ProtectedRoute path="/yukiAdmin/users/"  component={Users} />
          
          <ProtectedRoute path="/yukiAdmin/user/addReview"  component={AddReview} />
          <ProtectedRoute path="/yukiAdmin/user/userReviews/:userId"  component={UserReviews} />
          <ProtectedRoute path="/yukiAdmin/user/edit/review/:reviewId"  
          component={EditReviews} />
        </Switch>
        </div>
          </div>

      </Router>
    </>
  );
}

export default App;

