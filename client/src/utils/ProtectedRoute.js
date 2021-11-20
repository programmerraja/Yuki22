import React from "react";
import { Route, Redirect } from "react-router-dom";
import API from "./API";

function ProtectedRoute({ path,props, user, component: Component }) {
	return(<Route exact
				path={path}
				render={(props) => (	
				user && !API.checkTokenExp()? 
				<Component user={user} {...props} /> :
				<Redirect to='/login' />
				)}
				/>);
}

export default ProtectedRoute;
