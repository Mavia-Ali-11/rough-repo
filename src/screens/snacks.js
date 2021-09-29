import React,{useContext, useState} from "react";
import { GlobalContext } from "../Context/Context";

function Snacks(){;
    const {state, dispatch} = useContext(GlobalContext)
    const [newSnack, setNewSnack] = useState('');
    const [newDrink, setNewDrink] = useState('');

    const updateSnack = () => {
        console.log('newSnack', newSnack);
        dispatch({ type: "UPDATE_SNACK", payload: newSnack });
    }
    const updateDrink = () => {
        // console.log('newSnack', newSnack);
        dispatch({ type: "UPDATE_DRINK", payload: newDrink });
    }
    // console.log(state.snacks)
    return(
        <div>
        <h3>We Have {state.snacks} And {state.drink}</h3>
        <input type="text" value={newSnack} onChange={(ev) => { setNewSnack(ev.target.value) }} />
            <button onClick={updateSnack}>Update Snack</button>
            <br/>
        <input type="text" value={newDrink} onChange={(ev) => { setNewDrink(ev.target.value) }} />
            <button onClick={updateDrink}>Update Drink</button>
        </div>
    )
}

export default Snacks