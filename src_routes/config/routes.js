import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Home from "../screens/home";
import About from "../screens/about";
import StudentDetails from "../screens/student-details";
import ProductDetails from "../screens/product-details";
import Login from "../screens/login";

function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/student-details/:rollNumber">
                    <StudentDetails />
                </Route>
                <Route path="/product-details/:id">
                    <ProductDetails />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;