import React, { useContext } from 'react';
import { GlobalContext } from '../context/context';
import { Link } from 'react-router-dom';

function Navbar() {

    const { state, dispatch } = useContext(GlobalContext);

    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/my-tweets">My tweets</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={
                    () => {
                        let authUser = {}
                        dispatch({type: "AUTH_USER", payload: authUser})
                    }
                }>Sign out</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;