import React from 'react'
import creditCard from '../images/creditcard.svg';

function CardSection() {
    return (
        <div className='card-sec'>
            <div className='inner'>
                <div className='card-left'>
                    <h2 className='secondary-heading'>One card for all your payments.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
                <div className='card-right'>
                    <img src={creditCard} />
                </div>
            </div>
        </div>
    )
}

export default CardSection;
