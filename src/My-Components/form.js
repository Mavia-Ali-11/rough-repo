import React, { useState } from 'react';
import StudentTable from './student-data';

function Form() {
    const [stdName, handleName] = useState('');
    const [stdRoll, handleRoll] = useState('');
    const [stdData, setStdData] = useState([]);

    return (
        <div>
            <h2>Student Form</h2>

            <label>
                Student name:&nbsp;
                <input type="text" onChange={(e) => handleName(e.target.value)} value={stdName} />
            </label>

            <br /><br />

            <label>
                Roll number:&nbsp;
                <input type="text" onChange={(e) => handleRoll(e.target.value)} value={stdRoll} />
            </label>

            <br /><br />

            <button onClick={() => {
        
                let studentObj = {
                    name: stdName,
                    rollNum: stdRoll
                }
                setStdData(stdData.concat([studentObj]));
                console.log(stdData);
                
                handleName('');
                handleRoll('');
                
            }}>Save data</button>

            <StudentTable students={stdData} />
        </div>
    )
}


export default Form;