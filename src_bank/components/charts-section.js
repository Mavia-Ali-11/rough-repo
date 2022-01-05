import React from 'react'
import chart from '../images/chart.svg';

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

                </div>
            </div>
        </div>
    )
}

export default ChartsSection;
