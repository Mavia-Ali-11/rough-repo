import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalContext } from '../context/context';
import { auth, onAuthStateChanged } from './firebase';
import { db, getDocs, collection, query, where } from '../config/firebase';

import NavbarAuth from '../components/navbar-auth';
import SignUp from '../screens/signup';
import SignIn from '../screens/signin';
import Home from '../screens/home';
import MyTweets from '../screens/my-tweets';
import Profile from '../screens/profile';
import Sidebar from '../components/sidebar';

function Routes() {

    const { state, dispatch } = useContext(GlobalContext);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                let fetchUser;
                const q = query(collection(db, "users"), where("uid", "==", user.uid));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    fetchUser = doc.data();
                    return fetchUser;
                });
                dispatch({ type: "CURRENT_USER", payload: fetchUser });
            } else if(!user && (window.location.pathname != "/" && window.location.pathname != "/signup")) {
                dispatch({ type: "CURRENT_USER", payload: {} });
                window.location.replace("/");
            }
        })
    }, []);

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/home">
                    {/* <NavbarAuth /> */}
                    <Home />
                </Route>
                <Route path="/my-tweets">
                    {/* <NavbarAuth /> */}
                    <MyTweets />
                </Route>
                <Route path="/profile">
                    {/* <NavbarAuth /> */}
                    <Profile />
                </Route>
                <Route path="/sidebar">
                    <Sidebar />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;