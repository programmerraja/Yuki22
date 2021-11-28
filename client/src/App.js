
import {React,useState} from 'react';
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

import ResetPassword from "./pages/ResetPassword";
import ForgetPassword from "./pages/ForgetPassword";

import EmailVerified from "./pages/EmailVerified";
import UserProfile from "./pages/UserProfile";
import AddReview from "./pages/AddReview";
import Reviews from "./pages/Reviews";
import MyReviews from "./pages/MyReviews";
import EditReviews from "./pages/EditReviews";




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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Yuki22</title>
        <meta
          name="description"
          content="website for posting company review and interview process build by cse 2022 batch"
        />
    
      </Helmet>
      <Router>
      <Nav user={API.isAuth()}/>
        <Switch>
          <Route exact path="/" component={Home}/>

          <Route exact path="/signin" component={()=>{return(<Signin setUser={setUser}/>)}}/>
          <Route exact path="/companies" component={Companies} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/user/forgetPassword" component={ForgetPassword} />
          <Route exact path="/user/verifiy/email/:userId"  component={EmailVerified}/>
          <Route path="/user/reset/password/:passwordId" component={ResetPassword} />
          <Route exact path="/company/reviews/:companyId"  component={Reviews}/>

          <Route path="/user/logout"  component={()=>{return(<Logout setUser={setUser}/>)}}/>
          <ProtectedRoute path="/user/profile"  component={UserProfile}/>
          <ProtectedRoute path="/user/addReview"  component={AddReview} />
          <ProtectedRoute path="/user/myReviews"  component={MyReviews} />
          <ProtectedRoute path="/user/edit/review/:reviewId"  
          component={EditReviews} />


        </Switch>
      </Router>
    </>
  );
}

export default App;

