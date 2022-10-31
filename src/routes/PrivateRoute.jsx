import React, { memo } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { auth } = useSelector((state) => state);
    return (
        <Route
            {...rest}
            render={(props) =>
                !auth.authenticated && !auth.loading ? <Redirect to="/admin" /> : <Component {...props} />
            }
        />
    );
};

export default memo(PrivateRoute);
