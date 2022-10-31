import React, { lazy, memo, Suspense, useEffect } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../actions/auth";
import Spinner from "../components/common/Spinner/Spinner";

const Alerts = lazy(() => import("../components/common/Alerts/Alerts"));
const PublicRoute = lazy(() => import("./PublicRoute"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));

const Home = lazy(() => import("../components/pages/Home/Home"));
const Admin = lazy(() => import("../components/pages/Admin/Admin"));
const AdminConfirmations = lazy(() => import("../components/pages/AdminConfirmations/AdminConfirmations"));
const AdminUser = lazy(() => import("../components/pages/AdminUser/AdminUser"));

const Routes = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    useEffect(() => {
        dispatch(auth());
    }, [dispatch]);

    useEffect(() => {
        const path = location.pathname.split("/").filter((item) => item)[0];
        document.title = capitalizeFirstLetter(path || "Reyes y Poncho");
    }, [location]);

    return (
        <Suspense fallback={<Spinner />}>
            <Alerts />
            <Switch>
                <Route exact path="/" component={Home} />
                <PublicRoute exact path="/admin" component={Admin} />
                <PrivateRoute exact path="/admin/confirmations" component={AdminConfirmations} />
                <PrivateRoute exact path="/admin/user" component={AdminUser} />
                <Redirect to="/" />
            </Switch>
        </Suspense>
    );
};

export default memo(Routes);
