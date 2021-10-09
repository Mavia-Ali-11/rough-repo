import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context';
import { useHistory, Link } from "react-router-dom";

function SignUp() {

    const history = useHistory();
    const { state, dispatch } = useContext(GlobalContext);
    const [username, handleUsername] = useState("");
    const [email, handleEmail] = useState("");
    const [password, handlePassword] = useState("");

    return (
        <div>
            <h2>Sign up to continue...</h2>

            Username<br />
            <input type="text" value={username} onChange={(e) => { handleUsername(e.target.value) }} /><br />

            Email<br />
            <input type="text" value={email} onChange={(e) => { handleEmail(e.target.value) }} /><br />

            Password<br />
            <input type="password" value={password} onChange={(e) => { handlePassword(e.target.value) }} />

            <br /><br />

            <button onClick={
                () => {
                    if (username != "" && email != "" && password != "") {

                        let newUser = {
                            username: username,
                            email: email,
                            password: password,
                        }

                        if (state.users.length != 0) {

                            let final = [];

                            state.users.map((user) => {
                                if (user.username != username && user.email != email) {
                                    final.push(true);
                                } else if (user.username == username) {
                                    final.push(false);
                                    alert(`The username ${username} is taken, please try different one.`);
                                } else if (user.email == email) {
                                    final.push(false);
                                    alert(`An account with ${email} already exist.`);
                                }
                            })

                            if(final.indexOf(false) == -1) {
                                dispatch({ type: "SAVE_USER", payload: newUser });
                                dispatch({ type: "AUTH_USER", payload: newUser });
                                alert("Sign up successfully.");
                                history.push("/home");
                            }

                        } else {
                            dispatch({ type: "SAVE_USER", payload: newUser });
                            dispatch({ type: "AUTH_USER", payload: newUser });
                            alert("Sign up successfully.");
                            history.push("/home");
                        }
                    } else {
                        alert("Looks like you have missed something in signup form.");
                    }
                }
            }>Sign up</button>

            <h6>Already have an accout? <Link to="/">Sign in</Link></h6>
        </div>
    )
}

export default SignUp;