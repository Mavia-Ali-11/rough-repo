import React from 'react';
import logo from '../images/logo.svg';

function Navigation() {
    return (
        <div className='mainNav'>
            <div>
                <img src={logo} />
            </div>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Pricing</a>
                </li>
            </ul>
            <button>Sign Up</button>
        </div>
    )
}

export default Navigation;
