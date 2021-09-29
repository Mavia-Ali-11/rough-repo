import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import FreeAPI from '../screens/free-api';
import Snacks from "../screens/snacks";
import Signup from "../screens/signup";

export default function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <FreeAPI />
                    </Route>
                    <Route path="/snacks">
                        <Snacks/>
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}