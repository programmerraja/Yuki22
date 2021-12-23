import React from "react";
import { Route, Redirect } from "react-router-dom";
import API from "./API";

function ProtectedRoute({ path, component: Component }) {
	return(<Route exact
				path={path}
				render={(props) => (	
				true? 
				<Component  /> :
				<Redirect to='/signin' />
				)}
				/>);
}
// API.isAuth() && !API.checkTokenExp()

export default ProtectedRoute;
