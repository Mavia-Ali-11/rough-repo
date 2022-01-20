import React from 'react'
import chart from '../images/chart.svg';
import arrow from '../images/arrow.svg';
import blob1 from '../images/blob_top.svg';
import blob2 from '../images/blob_bottom.svg';

function ChartsSection() {
    return (
        <div className='charts-sec'>
            <div className='inner'>
                <div className='chart-left'>
                    <div className='stats'>
                        <div>
                            <p>Balance</p>
                            <h4>$250</h4>
                        </div>
                        <div>
                            <p>Last Transaction</p>
                            <h4>$1,000</h4>
                        </div>
                    </div>
                    <img src={chart} />
                </div>
                <div className='chart-right'>
                    <h2 className='secondary-heading'>Manage your finances like a pro in no time</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. consectetur adipiscing abore et dolore magna aliqua.</p>
                    <button>Learn More 
                        <img src={arrow} />
                        <img className='blob1' src={blob1} />
                        <img className='blob2' src={blob2} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChartsSection;
