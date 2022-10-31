import React, { memo } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Body from "./components/common/Body/Body";
import { Provider } from "react-redux";
import { store } from "./store";
import Routes from "./routes/Routes";

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Body>
                    <Route component={Routes} />
                </Body>
            </Router>
        </Provider>
    );
};
export default memo(App);
