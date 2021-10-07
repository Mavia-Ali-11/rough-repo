import React from 'react';
import { Link } from 'react-router-dom';
import { auth, signOut } from '../config/firebase';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Sign in</Link></li>
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="" onClick={() => {
                    signOut(auth).then(() => {
                        console.log("signout");
                      }).catch((error) => {
                        console.log(error);
                      });
                }}>Sign out</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;