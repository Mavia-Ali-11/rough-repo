import React, { useContext } from "react";
import { GlobalContext } from "../context/context";
import { useHistory } from "react-router-dom";


function AllStudents() {

    const { state, dispatch } = useContext(GlobalContext);
    const history = useHistory();

    return (
        <div>
            <h2>Results of all students...</h2>

            <table border="8px" cellPadding="5px">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Student Name</th>
                        <th>Roll Number</th>
                        <th>Total Marks</th>
                        <th>Feedback</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.studentsData.map((data, index) => {
                            
                            let grade;

                            if(data.totalMarks >= 80) {
                                grade = "A+";
                            } else if (data.totalMarks >= 70) {
                                grade = "A";
                            } else if (data.totalMarks >= 60) {
                                grade = "B";
                            } else if (data.totalMarks >= 50) {
                                grade = "C";
                            } else {
                                grade = "F";
                            }

                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.stdName}</td>
                                    <td>{data.rollNum}</td>
                                    <td>{data.totalMarks}</td>
                                    <td>{data.feedback}</td>
                                    <td>{grade}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <br/>

            <button onClick={
                () => {
                    history.push("/add-students-data");
                }
            }>Add results</button>
        </div>
    )
}

export default AllStudents;