import React, { useContext } from 'react';
import { GlobalContext } from '../context/context';
import { useHistory } from "react-router-dom";

function MyDetails() {

    const { state, dispatch } = useContext(GlobalContext);
    const history = useHistory();

    return (

        <div>
            <h2>Your results</h2>

            <table border="15px" cellPadding="10px">
                <thead>
                    <tr>
                        <th colspan="3">{state.authenticatedUser.username.toUpperCase()}
                            <br />

                            {
                                state.studentsData.map((result) => {
                                    if (state.authenticatedUser.username.toLowerCase() == result.student_name.toLowerCase()) {
                                        return (
                                            <span>Roll # {result.roll_num}</span>
                                        )
                                    }
                                })
                            }

                            {state.authenticatedUser.roll_num}
                            <hr />
                            {state.authenticatedUser.email}
                        </th>
                    </tr>
                    <tr>
                        <th>Total Marks %</th>
                        <th>Grade</th>
                        <th>Feedback</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        state.studentsData.map((result) => {
                            if (state.authenticatedUser.username.toLowerCase() == result.student_name.toLowerCase()) {
                                console.log(state.authenticatedUser, result)
                                return (
                                    <tr>
                                        <td>{result.total_marks}</td>
                                        <td>{result.grade}</td>
                                        <td>{result.feedback}</td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </table>

            <br />

            <button onClick={
                () => {
                    history.push("/");
                }
            }>Sign out</button>
        </div>
    )
}

export default MyDetails;