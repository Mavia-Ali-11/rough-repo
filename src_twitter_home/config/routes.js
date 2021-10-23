import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalContext } from '../context/context';
import { auth, onAuthStateChanged } from './firebase';
import { db, getDocs, collection, query, where } from '../config/firebase';

import Navbar from '../components/navbar';
import NavbarAuth from '../components/navbar-auth';
import SignUp from '../screens/signup';
import SignIn from '../screens/signin';
import Home from '../screens/home';
import MyTweets from '../screens/my-tweets';

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
                console.log(state.authUser);
            
                let tweetsCount;
                let tweetsCounter = await getDocs(collection(db, 'tweets_counter'));
                tweetsCounter.forEach((doc) => {
                    tweetsCount = doc.data();
                    return tweetsCount;
                });
                
                dispatch({ type: "TWEETS_COUNT", payload: tweetsCount });
                console.log(state.tweetsCount);
                
            } else {
                dispatch({ type: "CURRENT_USER", payload: {} });
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