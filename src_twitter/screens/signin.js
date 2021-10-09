import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { GlobalContext } from "../context/context";

function SignIn() {

    const history = useHistory();
    const { state, dispatch } = useContext(GlobalContext);
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
                    
                    let final = [];

                    for (var x = 0; x < state.users.length; x++) {
                        if (state.users[x].email == email && state.users[x].password == password) {
                            let authUser = {
                                username: state.users[x].username,
                                email: email,
                                password: password,
                            }
                            dispatch({ type: "AUTH_USER", payload: authUser });
                            alert("Sign in successfully.");
                            final.push(true);
                            history.push("/home");
                            break;
                        } else if (state.users[x].email == email && state.users[x].password != password) {
                            alert("The password you have entered is incorrect.");
                            final.push(true);
                            break;
                        } else if (state.users[x].email != email) {
                            final.push(false);
                        }
                    }

                    if (final.indexOf(true) == -1) {
                        alert(`There is no account corresponding to ${email}.`);
                        console.log(final);
                    }

                }

            }>Sign in</button>

            <h6>Didn't have an accout? <Link to="/signup">Create one</Link></h6>
        </div>
    )
}

export default SignIn;
