import React from 'react';
import Navigation from '../components/navigation';
import arrow from '../images/arrow.svg';
import phone from '../images/phone.svg';
import gr1 from '../images/ring_orange.svg';
import gr2 from '../images/message_pink.svg';
import gr3 from '../images/message_blue.svg';

function Header() {
    return (
        <>
            <div className='header'>
                <div className='inner'>
                    <Navigation />
                    <div className='header-content'>
                        <div className='left-content'>
                                <h1>Smart Banking for Freelancers</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                <button>Register Now <img src={arrow} /></button>
                        </div>
                        <div className='right-content'>
                            <img className='phone' src={phone} />
                            <img className='gr1' src={gr1} />
                            <img className='gr2' src={gr2} />
                            <img className='gr3' src={gr3} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;
