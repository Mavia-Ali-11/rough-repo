import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import { auth, createUserWithEmailAndPassword  } from "../config/firebase";

function SignUp() {

    const history = useHistory();
    const [username, handleUsername] = useState("");
    const [email, handleEmail] = useState("");
    const [password, handlePassword] = useState("");
    const [role, handleRole] = useState("Trainer");
    const [errMsg, handleErrMsg] = useState("");

    return (
        <div>
            <h2>Sign up to continue...</h2>

            Username<br />
            <input type="text" value={username} onChange={(e) => { handleUsername(e.target.value) }} /><br />
            
            Email<br />
            <input type="email" value={email} onChange={(e) => { handleEmail(e.target.value) }} /><br />

            Password<br />
            <input type="password" value={password} onChange={(e) => { handlePassword(e.target.value) }} /><br />

            Role<br />
            <select onChange={(e) => { handleRole(e.target.value) }}>
                <option>Trainer</option>
                <option>Student</option>
            </select>

            <br /><br />

            <button onClick={
                () => {
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {

                            if (role == "Trainer") {
                                history.push("/add-students-data");
                            } else {
                                history.push("/my-details");
                            }
                            handleEmail("");
                            handlePassword("");
                        })
                        .catch((error) => {
                            handleErrMsg(error.message);
                            setTimeout(() => {
                                handleErrMsg("");
                            }, 5000);
                        });
                }
            }>Sign Up</button>

            <p style={{ color: "red" }}>{errMsg}</p>

            <h6>Already have an accout? <Link to="/">Sign In</Link></h6>
        </div>
    )
}

export default SignUp;