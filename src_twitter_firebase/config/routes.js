import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalContext } from '../context/context';
import { auth, onAuthStateChanged } from './firebase';

import Navbar from '../components/navbar';
import NavbarAuth from '../components/navbar-auth';
import SignUp from '../screens/signup';
import SignIn from '../screens/signin';
import Home from '../screens/home';
import MyTweets from '../screens/my-tweets';

function Routes() {

    const { state, dispatch } = useContext(GlobalContext);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({ type: "CURRENT_USER", payload: user });
                console.log(state.authUser);
            } else {
                console.log("user not found");
                console.log(state.authUser);
            }
        })
    }, []);

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