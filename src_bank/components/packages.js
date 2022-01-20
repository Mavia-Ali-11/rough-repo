import React from 'react'
import card from '../images/creditcard.svg';
import active from '../images/active.svg';
import inactive from '../images/inactive.svg';
import available from '../images/check.svg';
import unavailable from '../images/check-disabled.svg';

function Packages() {
    return (
        <div className='packages'>
            <div className='inner'>
                <div className='title'>
                    <h3>An exceptional service, <span>at the right price</span></h3>
                    <p>Start with our free plan and switch to premium as you grow.</p>
                </div>
                <div className='cards'>
                    <div>
                        <h4>Free</h4>
                        <h2>$0/m</h2>
                        <p>Manage your business with a simple and efficient account</p>
                        <button>Get Started</button>
                        <img src={card} />
                        <div>
                            <img src={active} />
                            <img src={inactive} />
                        </div>
                        <ul>
                            <li><img src={available} />10 free local transfers</li>
                            <li><img src={available} />Free ATM withdrawals in Dollar up to $250 per month</li>
                            <li><img src={available} />Free payments to other Draft accounts</li>
                            <li><img src={available} />Prepaid debit cards</li>
                            <li><img src={available} />Virtual cards</li>
                            <li><img src={unavailable} />Priority 24/7 support</li>
                            <li><img src={unavailable} />Exchange 24 currencies</li>
                            <li><img src={unavailable} />Multi-user access</li>
                        </ul>
                    </div>

                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Packages;
