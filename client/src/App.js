
import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Helmet } from 'react-helmet';

//components
import Nav from "./components/Nav";
import SquareLoader from './components/SquareLoader';

//pages
import Home from './pages/Home';
import Companies from './pages/Companies';


import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

// import ResetPassword from "./pages/ResetPassword";
// import ForgetPassword from "./pages/ForgetPassword";

// import EmailVerified from "./pages/EmailVerified";
import UserProfile from "./pages/UserProfile";
import AddReview from "./pages/AddReview";


// import Logout from "./pages/Logout";
// import NotFound from "./pages/NotFound";

//utils
import ProtectedRoute from './utils/ProtectedRoute';

//styles
import './App.css';

function App(props) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>JustPlaced</title>
        <meta
          name="description"
          content="!"
        />
        <meta name="keywords" content="" />
      </Helmet>
      <Router>
      <Nav/>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/companies" component={Companies} />
          <Route exact path="/signup" component={Signup} />

          <Route exact path="/user/profile" component={UserProfile} />
          <Route exact path="/user/addReview" component={AddReview} />


        </Switch>
      </Router>
    </>
  );
}

export default App;

  // <Route exact path="/" component={Home} />
  //         <Route exact path="/signin" component={Signin} />
  //         <Route exact path="/signup" component={Signup} />

  //         <Route exact path="/user/forget/password" component={ForgetPassword} />
          
  //         <Route path="/user/reset/password/:id" component={ResetPassword} />

  //         <ProtectedRoute path="/user/profile" component={UserProfile} />
  //         <ProtectedRoute path="/user/logout" component={Logout} />
  //         <Route component={NotFound}/>