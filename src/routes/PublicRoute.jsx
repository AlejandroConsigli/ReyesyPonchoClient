import React, { memo } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
    const { auth } = useSelector((state) => state);

    return (
        <Route
            {...rest}
            render={(props) =>
                auth.authenticated && !auth.loading ? <Redirect to="/admin/confirmations" /> : <Component {...props} />
            }
        />
    );
};

export default memo(PublicRoute);
