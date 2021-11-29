import React from "react";
import { Route, Redirect } from "react-router-dom";
import API from "./API";

function ProtectedRoute({ path, component: Component }) {
	console.log(API.isAuth(),API.checkTokenExp())
	return(<Route exact
				path={path}
				render={(props) => (	
				API.isAuth() && !API.checkTokenExp()? 
				<Component  /> :
				<Redirect to='/signin' />
				)}
				/>);
}

export default ProtectedRoute;