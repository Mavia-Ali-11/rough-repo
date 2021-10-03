import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context';
import { useHistory } from "react-router-dom";

function AddStudentsData() {

    const [stdName, handleStdName] = useState("");
    const [rollNum, handleRollNum] = useState("");
    const [totalMarks, handleTotalMarks] = useState("");
    const [feedback, handleFeedback] = useState("");

    const { state, dispatch } = useContext(GlobalContext);
    const history = useHistory();

    return (
        <div>
            <h2>Add student result here...</h2>

            Student Name<br />
            <input type="text" value={stdName} onChange={(e) => handleStdName(e.target.value)} /><br />

            Roll Number<br />
            <input type="text" value={rollNum} onChange={(e) => handleRollNum(e.target.value)} /><br />

            Total marks<br />
            <input type="text" value={totalMarks} onChange={(e) => handleTotalMarks(e.target.value)} /><br />

            Feedback<br />
            <input type="text" value={feedback} onChange={(e) => handleFeedback(e.target.value)} />
            <br /><br />

            <button onClick={() => {
                if (stdName != "" && rollNum != "" && totalMarks != "" && feedback != "") {
                    let grade;

                    if (totalMarks >= 80) {
                        grade = "A+";
                    } else if (totalMarks >= 70) {
                        grade = "A";
                    } else if (totalMarks >= 60) {
                        grade = "B";
                    } else if (totalMarks >= 50) {
                        grade = "C";
                    } else {
                        grade = "F";
                    }

                    let stdData = {
                        student_name: stdName,
                        roll_num: rollNum,
                        total_marks: totalMarks,
                        grade: grade,
                        feedback: feedback
                    }

                    dispatch({ type: "SAVE_STUDENT_DATA", payload: stdData });
                    
                    handleStdName("");
                    handleRollNum("");
                    handleTotalMarks("");
                    handleFeedback("");
                } else {
                    alert("Looks like you have missed something!");
                }
            }}>Add Result</button>

            &nbsp;&nbsp;

            <button onClick={
                () => {
                    history.push("/all-students");
                }
            }>Open results</button>

            <br/><br />

            <button onClick={
                () => {
                    history.push("/");
                }
            }>Sign out</button>
        </div>
    )
}

export default AddStudentsData;