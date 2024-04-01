import React, { useState } from "react";
import classes from './App.module.scss';

export const App = () => {
    const [state, setState] = useState(0);

    const increament = () => setState( prev => prev+1);
    const decreament = () => setState(prev => prev -1);
    return (
        <>
        <h1 className={classes.value}>{state}</h1>
        <button className={classes.button} onClick={increament}>Increament</button>
        <button onClick={decreament}>Decreament</button>
        </>
    )
}