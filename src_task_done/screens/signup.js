import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context';
import { useHistory, Link } from "react-router-dom";

function SignUp() {

    const history = useHistory();
    const { state, dispatch } = useContext(GlobalContext);
    const [username, handleUsername] = useState("");
    const [email, handleEmail] = useState("");
    const [password, handlePassword] = useState("");
    const [role, handleRole] = useState("Trainer");

    return (
        <div>
            <h2>Sign up to continue...</h2>

            Username:<br />
            <input type="text" value={username} onChange={(e) => { handleUsername(e.target.value) }} /><br />

            Email:<br />
            <input type="text" value={email} onChange={(e) => { handleEmail(e.target.value) }} /><br />

            Password:<br />
            <input type="password" value={password} onChange={(e) => { handlePassword(e.target.value) }} /><br />

            Role:<br />
            <select onChange={(e) => { handleRole(e.target.value) }}>
                <option>Trainer</option>
                <option>Student</option>
            </select>
            <br /><br />

            <button onClick={
                () => {
                    if (username != "" && email != "" && password != "") {
                        let newUser = {
                            username: username,
                            email: email,
                            password: password,
                            role: role.toLowerCase()
                        }
                        dispatch({ type: "SAVE_USER", payload: newUser });
                        alert("Sign Up Successfully");
                        if(role == "Trainer") {
                            history.push("/add-students-data");
                        } else {
                            history.push("/my-details");
                        }
                    } else {
                        alert("Looks like you have missed something in signup form!");
                    }
                }
            }>Sign Up</button>

            <h6>Already have an accout? <Link to="/">Sign In</Link></h6>
        </div>
    )
}

export default SignUp;