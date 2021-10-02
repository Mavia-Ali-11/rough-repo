import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context';

function MyDetails() {
    
    const  [stdName, handleStdName] = useState("");
    const  [rollNum, handlerollNum] = useState("");
    const  [totalMarks , handleTotalMarks ] = useState("");
    const  [feedback, handlefeedback] = useState("");

    const { state, dispatch } = useContext(GlobalContext);

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default MyDetails;