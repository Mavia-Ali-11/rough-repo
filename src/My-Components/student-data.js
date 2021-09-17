import React, { useState } from 'react';

function StudentTable({ students }) {

    return (
        <div>
            <h2>Student Data</h2>
            <table border="2px">
                <thead>
                    <tr>
                        <th>S no</th>
                        <th>Student name</th>
                        <th>Roll no</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, index) => {
                            <tr>
                                <th>{index + 1}</th>
                                <th>{student.name}</th>
                                <th>{student.rollNum}</th>
                            </tr>
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default StudentTable;