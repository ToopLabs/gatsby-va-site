import React from 'react'
import { Link } from 'gatsby'
import './nav.css'

const Nav = () =>
<nav>
    <ul>
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
</nav>


export default Nav;