import React from 'react'
import { Route, Redirect } from "react-router-dom";

const RouteGuard = ({ component: Component, ...rest }) => {
    return (
        <Route { ...rest } render={ props => (
            localStorage.getItem("jwtToken") ? 
            <Component {...props} /> : 
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        ) }
        />
    );
};


export default RouteGuard;