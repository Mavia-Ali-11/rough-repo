import React from 'react'
import plus from '../images/plus.svg';
import minus from '../images/minus.svg';

function FAQ() {


    let questions = [
        {
            ques: "Who can open a Draft account?",
            ans: "Lorm ipsum, dolor sit amet consectetur adipisicing elit. Magni volupate unde vero corporis tempora praesentium laboriosam ratione incidunt a odit."
        },
        {
            ques: "Who if I withdraw money abroad?",
            ans: "Lorm ipsum, dolor sit amet consectetur adipisicing elit. Magni volupate unde vero corporis tempora praesentium laboriosam ratione incidunt a odit."
        },
        {
            ques: "Who can open a Draft account?",
            ans: "Lorm ipsum, dolor sit amet consectetur adipisicing elit. Magni volupate unde vero corporis tempora praesentium laboriosam ratione incidunt a odit."
        },
    ]


    return (
        <div className='faqs'>
            <div className='inner'>
                <div className='title'>
                    <h3>Frequently <span>asked questions</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius duis at consectetur lorem donec massa sapien.</p>
                </div>
                <div className='faq'>

                    {
                        questions.map((q, i) => {
                            return (
                                <div key={i} id={i}>
                                    <div>
                                        <h4>{q.ques}</h4>
                                        <p>{q.ans}</p>
                                    </div>
                                    <div>
                                        <img src={plus} onClick={()=>{
                                            document.getElementById(i).style.maxHeight = "100%"
                                            // document.querySelectorAll("#" + i + " p")[0].style.color = "#000"
                                            console.log(document.querySelectorAll("#" + i))
                                            
                                        }} />
                                    </div>
                                </div>
                            )
                        })
                    }


                    {/* <div>
                        <div>
                            <h4>Who if I withdraw money abroad?</h4>
                            <p>Lorm ipsum, dolor sit amet consectetur adipisicing elit. Magni volupate unde vero corporis tempora praesentium laboriosam ratione incidunt a odit.</p>
                        </div>
                        <div>
                            <img src={plus} />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default FAQ;
