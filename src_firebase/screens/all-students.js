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
                        <th>Grade</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.studentsData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.student_name}</td>
                                    <td>{data.roll_num}</td>
                                    <td>{data.total_marks}</td>
                                    <td>{data.grade}</td>
                                    <td>{data.feedback}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <br />

            <button onClick={
                () => {
                    history.push("/add-students-data");
                }
            }>Add results</button>

            <br /><br />

            <button onClick={
                () => {
                    history.push("/");
                }
            }>Sign out</button>
        </div>
    )
}

export default AllStudents;