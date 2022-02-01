import React from 'react'
import card from '../images/creditcard.svg';
import active from '../images/active.svg';
import inactive from '../images/inactive.svg';
import avail from '../images/check.svg';
import unavail from '../images/check-disabled.svg';

function Packages() {
    return (
        <div className='packages'>
            <div className='inner'>
                <div className='title'>
                    <h3>An exceptional service, <span>at the right price</span></h3>
                    <p>Start with our free plan and switch to premium as you grow</p>
                </div>
                <div className='cards'>
                    <div>
                        <h4>Free</h4>
                        <h2>$0/m</h2>
                        <p>Manage your business with a simple and efficient account</p>
                        <button>Get Started</button>
                        <img className='card-img' src={card} />
                        <div className='card-swipe'>
                            <img src={active} />
                            <img src={inactive} />
                        </div>
                        <ul>
                            <li><img src={avail} />10 free local transfers</li>
                            <li><img src={avail} />Free ATM withdrawals in Dollar up to $250 per month</li>
                            <li><img src={avail} />Free payments to other Draft accounts</li>
                            <li><img src={avail} />Prepaid debit cards</li>
                            <li className='not-avail'><img src={unavail} />Virtual cards</li>
                            <li className='not-avail'><img src={unavail} />Priority 24/7 support</li>
                            <li className='not-avail'><img src={unavail} />Exchange 24 currencies</li>
                            <li className='not-avail'><img src={unavail} />Multi-user access</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Gold</h4>
                        <h2>$8/m</h2>
                        <p>Virtual cards and priority support to gain multiple accounts</p>
                        <button>Get Started</button>
                        <img className='card-img' src={card} />
                        <div className='card-swipe'>
                            <img src={active} />
                            <img src={inactive} />
                        </div>
                        <ul>
                            <li><img src={avail} />10 free local transfers</li>
                            <li><img src={avail} />Free ATM withdrawals in Dollar up to $250 per month</li>
                            <li><img src={avail} />Free payments to other Draft accounts</li>
                            <li><img src={avail} />Prepaid debit cards</li>
                            <li><img src={avail} />Virtual cards</li>
                            <li><img src={avail} />Priority 24/7 support</li>
                            <li className='not-avail'><img src={unavail} />Exchange 24 currencies</li>
                            <li className='not-avail'><img src={unavail} />Multi-user access</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Premium</h4>
                        <h2>$12/m</h2>
                        <p>Money exchange and multi-user accross to maximize your productivity</p>
                        <button>Get Started</button>
                        <img className='card-img' src={card} />
                        <div className='card-swipe'>
                            <img src={active} />
                            <img src={inactive} />
                        </div>
                        <ul>
                            <li><img src={avail} />10 free local transfers</li>
                            <li><img src={avail} />Free ATM withdrawals in Dollar up to $250 per month</li>
                            <li><img src={avail} />Free payments to other Draft accounts</li>
                            <li><img src={avail} />Prepaid debit cards</li>
                            <li><img src={avail} />Virtual cards</li>
                            <li><img src={avail} />Priority 24/7 support</li>
                            <li><img src={avail} />Exchange 24 currencies</li>
                            <li><img src={avail} />Multi-user access</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packages;
