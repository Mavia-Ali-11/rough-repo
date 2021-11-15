import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth, createUserWithEmailAndPassword  } from "../config/firebase";
import { db, setDoc, doc } from '../config/firebase';

function SignUp() {

    const history = useHistory();
    const [username, handleUsername] = useState("");
    const [email, handleEmail] = useState("");
    const [password, handlePassword] = useState("");
    const [errMsg, handleErrMsg] = useState("");

    return (
        <div>
            <h2>Sign up to continue...</h2>

            Username<br />
            <input type="text" value={username} onChange={(e) => { handleUsername(e.target.value) }} /><br />
            
            Email<br />
            <input type="email" value={email} onChange={(e) => { handleEmail(e.target.value) }} /><br />

            Password<br />
            <input type="password" value={password} onChange={(e) => { handlePassword(e.target.value) }} />

            <br /><br />

            <button onClick={
                () => {
                    if(username != "" && email != "" && password != "") {
                        createUserWithEmailAndPassword(auth, email, password)
                        .then(async (userCredential) => {

                            await setDoc(doc(db, "users", userCredential.user.uid), {
                                uid: userCredential.user.uid,
                                username: username,
                                email: email,
                                password: password
                            });

                            handleUsername("");
                            handleEmail("");
                            handlePassword("");
                            history.push("/home");
                        })
                        .catch((error) => {
                            handleErrMsg(error.message);
                            setTimeout(() => {
                                handleErrMsg("");
                            }, 5000);
                        });
                    } else {
                        alert("Looks like you have missed something in signup form!");
                    }
                }
            }>Sign up</button>

            <p style={{ color: "red" }}>{errMsg}</p>

            <h6>Already have an accout? <Link to="/">Sign In</Link></h6>
        </div>
    )
}

export default SignUp;