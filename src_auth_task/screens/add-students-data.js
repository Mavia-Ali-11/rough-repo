import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/Context';

function AddStudentsData() {
    
    const  [stdName, handleStdName] = useState("");
    const  [rollNum, handlerollNum] = useState("");
    const  [totalMarks , handleTotalMarks ] = useState("");
    const  [feedback, handlefeedback] = useState("");

    const { state, dispatch } = useContext(GlobalContext);

    return (
        <div>
            Student Name<br/>
            <input type="text" value={stdName} onChange={(e) => handleStdName(e.target.value)} /><br/>
           
            Roll Number<br/>
            <input type="text" value={rollNum} onChange={(e) => handlerollNum(e.target.value)} /><br/>
            
            Total marks :<br/>
            <input type="text" value={totalMarks} onChange={(e) => handleTotalMarks(e.target.value)} /><br/>
            
            Feedback:<br/>
            <input type="text" value={feedback} onChange={(e) => handlefeedback(e.target.value)} /><br/>
            
            <button onClick={() => {
               if(stdName != "" && rollNum != "" && totalMarks != "" && feedback != "") {
                   let stdData = {
                    stdName: stdName, 
                    rollNum: rollNum,
                    totalMarks: totalMarks,
                    feedback: feedback
                   }
                   dispatch({ type: "SAVE_STUDENT_DATA", payload: stdData });
               } else {
                   alert("Looks like you have missed something!");
               }
            }}>Add Result</button>
        </div>
    )
}

export default AddStudentsData;