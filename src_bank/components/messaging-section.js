import React from 'react'
import avatar1 from '../images/avatar1.svg';
import avatar2 from '../images/avatar2.svg';
import avatar3 from '../images/avatar3.svg';
import avatar4 from '../images/avatar4.svg';
import avatar5 from '../images/avatar5.svg';
import messaging from '../images/conversation.svg';
import texture from '../images/circleBg.svg';

function MessagingSection() {
    return (
        <div className='message-sec'>
            <div className='inner'>
                <div className='message-left'>
                    <h2 className='secondary-heading'>We support you  in 5 different languages</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    Aenean massa. Cum sociis natoque nostrud exercitation penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <div className='users'>
                        <img src={avatar1} />
                        <img src={avatar2} />
                        <img src={avatar3} />
                        <img src={avatar4} />
                        <img src={avatar5} />
                        <p>+30</p>
                    </div>

                    <img className='bgTexture' src={texture} />
                </div>
                <div className='message-right'>
                    <img src={messaging} />
                    <img className='bgTexture' src={texture} />
                </div>
            </div>
        </div>
    )
}

export default MessagingSection;
