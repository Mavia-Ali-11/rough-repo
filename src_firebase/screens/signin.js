import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../config/firebase"

function SignIn() {

    const history = useHistory();
    const [email, handleEmail] = useState("");
    const [password, handlePassword] = useState("");

    return (
        <div>
            <h2>Sign in to continue...</h2>

            Email<br />
            <input type="text" value={email} onChange={(e) => { handleEmail(e.target.value) }} /><br />

            Password<br />
            <input type="password" value={password} onChange={(e) => { handlePassword(e.target.value) }} />
            <br /><br />

            <button onClick={
                () => {
                    signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                      const user = userCredential.user;
                      console.log(user);
                    })
                    .catch((error) => {
                      console.error(error.message);
                    });
                }
            }>Sign In</button>

            <h6>Didn't have an accout? <Link to="/signup">Create one</Link></h6>
        </div>
    )
}

export default SignIn;
