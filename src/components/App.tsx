import React, { useState } from "react";
import classes from './App.module.scss';
import { Outlet, Link } from "react-router-dom";
import About from "@/pages/About/About";
import AvatarPng from '@/assets/graphic.png'
import AvatarJpg from '@/assets/manJPG.jpg'
import SaleSVG from '@/assets/Sale.svg'

export const App = () => {
    const [state, setState] = useState(0);

    const increament = () => setState( prev => prev+1);
    const decreament = () => setState(prev => prev -1);

    if(__PLATFORM__ === 'desktop') {
        return <div>ISDESKTOPPLATFORM</div>
    }

    if(__PLATFORM__ ==='mobile') {
        return <div>ISMOBILEPLATFORM</div>
    }

    return (
        <>
        <h1>PLATFORM={__PLATFORM__}</h1>
        <div>
            <img width={100} height={100} src={AvatarPng} alt="" />
            <img width={100} height={100} src={AvatarJpg} alt="" />
        </div>
        <div>
            <SaleSVG width={100} height={100}/>
        </div>
        <Link to={'/about'}>about</Link>
        <br />
        <Link to={'/shop'}>shop</Link>
        <h1 className={classes.value}>{state}</h1>
        <button className={classes.button} onClick={increament}>Increament</button>
        <button className={classes.button} onClick={decreament}>Decreament</button>
        <About />
        </>
        
    )
}