import React from "react";
import {
    Link
} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/snacks">Snacks</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
