import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "../config/firebase"

function SignUp() {

    const history = useHistory();
    const [email, handleEmail] = useState("");
    const [password, handlePassword] = useState("");

    return (
        <div>
            <h2>Sign up to continue...</h2>

            Email<br />
            <input type="email" value={email} onChange={(e) => { handleEmail(e.target.value) }} /><br />

            Password<br />
            <input type="password" value={password} onChange={(e) => { handlePassword(e.target.value) }} />

            <br /><br />

            <button onClick={
                () => {
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            console.log(user.providerData[0]);
                            handleEmail("");
                            handlePassword("");
                        })
                        .catch((error) => {
                            console.error(error.message)
                        });
                }
            }>Sign Up</button>

            <h6>Already have an accout? <Link to="/">Sign In</Link></h6>
        </div>
    )
}

export default SignUp;