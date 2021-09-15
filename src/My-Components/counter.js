import React, { useState, useEffect } from "react";
import '../App.css'

function Counter() {
    let [counter, setCounter] = useState(0);
    let names = ["Mavia", "Saif", "Salman", "Ziyad"];
    let [name, setUserName] = useState("Mavia");
    let [counterColor, changeColor] = useState("#000");

    function changeName() {
        let randomNum = Math.floor(Math.random() * 4);
        let newName = names[randomNum];
        setUserName(newName);
    }

    // Run on every state change 
    useEffect(() => {
        console.log("Run on every state change");
    })

    // Run once component did mount  
    useEffect(() => {
        console.log("Run once component did mount");
    }, [])

    // Run on any specific state change
    useEffect(() => {
        if(counter % 2 == 0 && counter % 5 != 0) {
            changeColor("green");
        }
        else if(counter % 2 != 0 && counter % 5 != 0) {
            changeColor("red");
        }
        else if(counter % 5 == 0) {
            changeColor("blue");
        }
        // console.log("Run on any specific state change");
    }, [counter])

    return (
        <div>
            <h3 style={{color: counterColor}}>React Counter</h3>

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