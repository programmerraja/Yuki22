import React from "react";
import { Route, Redirect } from "react-router-dom";
import API from "./API";

function ProtectedRoute({ path, component: Component }) {
	
	return(<Route exact
				path={path}
				render={(props) => (	
				API.isAuth() && !API.checkTokenExp()? 
				<Component  /> :
				<Redirect to='/yukiAdmin/signin' />
				)}
				/>);
}

export default ProtectedRoute;
