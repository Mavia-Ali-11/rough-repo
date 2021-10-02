import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import FreeAPI from '../screens/free-api';
import Snacks from "../screens/snacks";
import SignUp from "../screens/signup";
import SignIn from "../screens/signin";
import AddStdData from "../screens/add-students-data";
import MyDetails from "../screens/my-details";

export default function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <FreeAPI />
                    </Route>
                    <Route path="/free-api">
                        <FreeAPI />
                    </Route>
                    <Route path="/snacks">
                        <Snacks/>
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <Route path="/add-students-data">
                        <AddStdData />
                    </Route>
                    <Route path="/my-details">
                        <MyDetails />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}