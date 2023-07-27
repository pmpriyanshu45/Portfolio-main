import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeOver, defaultOver } from '../actions/index';
import { InactiveHeader } from '../actions/index';
import { activeHeader } from '../actions/index';

export default function Header() {
    const dispatch = useDispatch();
    const header = useSelector((state) =>state.changeHeader);
    // const [adclass, setadclass] = useState("header");
    const [Count, setCount] = useState(0);
    const heandleclick = () => {
        setCount(Count + 2);
        if (Count % 2 === 0) {
            // setadclass("header active");
            dispatch(activeHeader());
            setCount(1);
            dispatch(changeOver());
        }
        else {
            // setadclass("header");
            dispatch(InactiveHeader());
            setCount(0);
            dispatch(defaultOver());
        }
    }
    const closewin = () => {
        // setadclass("header");
        dispatch(InactiveHeader());
        setCount(0)
        dispatch(defaultOver());
    }
    return <>
        <header className={header}>
            <div className="container">
                <div className="row flex-end">
                    <button type="button" className="nav-toggler" onClick={() => { heandleclick() }}>
                        <span></span>
                    </button>
                    <nav className="nav">
                        <div className="nav-inner">
                            <ul>
                                <li><NavLink to='/' className="nav-item link-item" onClick={() => { closewin() }}>Home</NavLink></li>
                                <li><NavLink to='/about' className="nav-item link-item" onClick={() => { closewin() }}>About</NavLink></li>
                                <li><NavLink to='/portfolio' className="nav-item link-item" onClick={() => { closewin() }}>Portfolio</NavLink></li>
                                <li><NavLink to='/contact' className="nav-item link-item" onClick={() => { closewin() }}>Contact</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </>;
}


