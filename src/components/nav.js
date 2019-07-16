import React from 'react'
import { Link } from 'gatsby'
import './nav.css'

const Nav = () =>
<div className="navigation">
    <input type="checkbox" name="" />
    <span></span>
    <span></span>
    <ul class="menu">
        <li>
            <Link to="/">Britt Clennett</Link>
        </li>
        <li>
            <Link to="/showreel">Showreel</Link>
        </li>
        <li>
            <Link to="/tv">TV</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>
</div>



export default Nav;