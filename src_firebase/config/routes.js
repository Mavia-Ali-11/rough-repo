import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../components/navbar';
import IntroToContext from '../screens/intro-to-context';
import SignUp from '../screens/signup';
import SignIn from '../screens/signin';
import AddStudentsData from '../screens/add-students-data';
import MyDetails from '../screens/my-details';
import AllStudents from '../screens/all-students';

function Routes() {
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
                <Route path="/intro-to-context">
                    <IntroToContext />
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