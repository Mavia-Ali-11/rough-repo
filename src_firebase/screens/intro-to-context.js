import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context';

function IntroToContext() {

    const { state, dispatch } = useContext(GlobalContext);
    const [country, handleCountry] = useState("");
    const [city, handleCity] = useState("");

    return (
        <div>
            Country:<br/>
            <input type="text" value={country} onChange={(e) => {handleCountry(e.target.value)}} /><br/>
            
            City:<br/>
            <input type="text" value={city} onChange={(e) => {handleCity(e.target.value)}} />
            <br/><br/>
            
            <button onClick={
                () => {
                    dispatch({type: "UPDATE_COUNTRY", payload: country});
                    dispatch({type: "UPDATE_CITY", payload: city});
                    handleCountry("");
                    handleCity("");
                }
            }>Save data</button>

            <br/>

            <h4>I am living in {state.city}, {state.country}.</h4>
        </div>
    )
}

export default IntroToContext;