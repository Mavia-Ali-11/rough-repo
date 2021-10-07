import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { auth, signInWithEmailAndPassword } from "../config/firebase";

function SignIn() {

    const history = useHistory();
    const { state, dispatch } = useContext(GlobalContext);
    const [email, handleEmail] = useState("");
    const [password, handlePassword] = useState("");
    const [errMsg, handleErrMsg] = useState("");

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
            }>Sign In</button>

            <p style={{ color: "red" }}>{errMsg}</p>

            <h6>Didn't have an accout? <Link to="/signup">Create one</Link></h6>
        </div>
    )
}

export default SignIn;
