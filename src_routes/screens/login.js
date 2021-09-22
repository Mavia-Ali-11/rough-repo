import React, { useState } from "react";
import { useHistory } from "react-router-dom";

let user = {
    email: "mavia@gmail.com",
    password: "123"
}


function Login() {

    let history = useHistory();
   
    const [emailInp, handleEmail] = useState('');
    const [passInp, handlePass] = useState('');
    const [error, showError] = useState('');

    return (
        <div>
            Email:  <br /> <input type="text" onChange={(e) => handleEmail(e.target.value)} value={emailInp} /> <br />
            Password: <br /> <input type="password" onChange={(e) => handlePass(e.target.value)} value={passInp} /> <br />
            <button onClick={() => {
                if(emailInp === user.email && passInp === user.password) {
                    history.push("/about");
                }
                else {
                    showError("Incorrect email or password");
                    console.log("Incorrect email or password");
                }
            }}>Login</button>

            <h4>{error}</h4>
        </div>
    )
}

export default Login;
