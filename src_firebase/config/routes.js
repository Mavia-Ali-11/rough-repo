import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalContext } from '../context/context';
import { auth, onAuthStateChanged } from './firebase';

import Navbar from '../components/navbar';
import SignUp from '../screens/signup';
import SignIn from '../screens/signin';
import AddStudentsData from '../screens/add-students-data';
import MyDetails from '../screens/my-details';
import AllStudents from '../screens/all-students';

function Routes() {

    const { state, dispatch } = useContext(GlobalContext);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                dispatch({ type: "CURRENT_USER", payload: user });
                console.log(state.authenticatedUser);
            } else {
                console.log("user not found");
            }
        })
    }, [])


    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/add-students-data">
                    <AddStudentsData />
                </Route>
                <Route path="/my-details">
                    <MyDetails />
                </Route>
                <Route path="/all-students">
                    <AllStudents />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;