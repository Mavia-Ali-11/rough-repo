import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/Context';

function Signup() {
    
    const  [username, handleUsername] = useState("");
    const  [email, handleEmail] = useState("");
    const  [password, handlePassword] = useState("");
    const  [role, handleRole] = useState("Trainer");

    const {state, dispatch} = useContext(GlobalContext);

    return (
        <div>
            Username:<br/>
            <input type="text" value={username} onChange={(e) => handleUsername(e.target.value)} /><br/>
            Email:<br/>
            <input type="email" value={email} onChange={(e) => handleEmail(e.target.value)} /><br/>
            Password:<br/>
            <input type="password" value={password} onChange={(e) => handlePassword(e.target.value)} /><br/>
            Role:<br/>
            <select onChange={(e) => handleRole(e.target.value)}>
                <option>Trainer</option>
                <option>Student</option>
            </select><br/>
            <button onClick={() => {
               
               if(username != "" && email != "" && password != "") {
                   let newUser = {
                    username: username, 
                    email: email,
                    password: password,
                    role: role
                   }
                   dispatch({ type: "UPDATE_USERS", payload: newUser });

               } else {
                   alert("Looks like you have missed something!");
               }
            }}>Sign Up</button>
            

            {/* {
                state.users.map((user, index) => {
                    return(
                        <h4>This is {user.userName}</h4>
                    )
                })
            } */}
            
        </div>
    )
}

export default Signup;