import React, { useState }from 'react'
import { Link } from 'gatsby'
import './nav.css'


const Nav = () => {
    //all links toggle nav in case a user clicks on the current page
    const toggleNav = () => document.querySelector(".toggle-nav").click();

    return (
        <div className="navigation">
            <input className="toggle-nav" type="checkbox" name="" />
            <span></span>
            <span></span>
            <ul className="menu">
                <li>
                    <Link onClick={toggleNav} to="/">Britt Clennett</Link>
                </li>
                <li>
                    <Link onClick={toggleNav} to="/showreel">Showreel</Link>
                </li>
                <li>
                    <Link onClick={toggleNav} to="/tv">TV</Link>
                </li>
                <li>
                    <Link onClick={toggleNav} to="/about">About</Link>
                </li>
            </ul>
        </div>
    );

}





export default Nav;