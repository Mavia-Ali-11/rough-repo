import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/Context';
import { useHistory } from "react-router-dom";

function SignIn() {

    const history = useHistory();

    let [email, handleEmail] = useState("");
    let [password, handlePassword] = useState("");

    const { state, dispatch } = useContext(GlobalContext);

    return (
        <div>
            Email:<br />
            <input type="email" value={email} onChange={(e) => handleEmail(e.target.value)} /><br />

            Password:<br />
            <input type="password" value={password} onChange={(e) => handlePassword(e.target.value)} /><br />

            <button onClick={() => {
                state.users.map((user) => {
                    if (email == user.email && password == user.password) {
                        let signInUser = {
                            username: user.userName,
                            email: user.email,
                            password: user.password,
                            role: user.role
                        }
                        dispatch({ type: "SAVE_USER", payload: signInUser });
                        if (user.role == "trainer") {
                            history.push("/add-students-data");
                        } else {
                            history.push("/my-details");
                        }
                    } else if (email == user.email && password != user.password) {
                        alert("Password you entered is incorrect.");
                    } else {
                        alert("Email doesn't exist.");
                    }
                })
            }}>Sign In</button>

        </div>
    )
}

export default SignIn;
