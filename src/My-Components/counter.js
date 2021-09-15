import React, { useState } from "react";
import '../App.css'

function Counter() {
    let [counter, setCounter] = useState(0);
    let names = ["Mavia", "Saif", "Salman", "Ziyad"];
    let [name, setUserName] = useState("Mavia");

    function changeName() {
        let randomNum = Math.floor(Math.random() * 3);
        let newName = names[randomNum];
        setUserName(newName);
    }

    return (
        <div>
            <h1>React Counter</h1>

            <button onClick={() => setCounter(counter - 1)}>-</button>
            &nbsp;
            <span>{counter}</span>
            &nbsp;
            <button onClick={() => setCounter(counter + 1)}>+</button>

            <h4>{name}</h4>
            
            <button onClick={changeName}>Change name</button>
        </div>
    )
}

export default Counter;