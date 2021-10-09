import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../components/navbar';
import NavbarAuth from '../components/navbar-auth';
import SignUp from '../screens/signup';
import SignIn from '../screens/signin';
import Home from '../screens/home';
import MyTweets from '../screens/my-tweets';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Navbar />
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <Navbar />
                    <SignUp />
                </Route>
                <Route path="/home">
                    <NavbarAuth />
                    <Home />
                </Route>
                <Route path="/my-tweets">
                    <NavbarAuth />
                    <MyTweets />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;