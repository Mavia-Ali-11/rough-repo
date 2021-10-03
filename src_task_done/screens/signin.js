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
                    for (var x = 0; x < state.users.length; x++) {
                        if (email == state.users[x].email && password == state.users[x].password) {
                            let authUser = {
                                username: state.users[x].username,
                                email: email,
                                password: password,
                                role: state.users[x].role
                            }
                            
                            dispatch({ type: "AUTH_USER", payload: authUser });
                            alert("Sign In Successfully");
                            
                            if(authUser.role == "trainer") {
                                history.push("/add-students-data");
                            } else {
                                history.push("/my-details");
                            }
                            break;
                        } else if (email == state.users[x].email && password != state.users[x].password) {
                            alert("The password you have entered is incorrect!")
                            break;
                        }
                    }
                }
            }>Sign In</button>

            <h6>Didn't have an accout? <Link to="/signup">Create one</Link></h6>
        </div>
    )
}

export default SignIn;
