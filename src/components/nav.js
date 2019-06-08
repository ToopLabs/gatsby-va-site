import React from 'react'
import { Link } from 'gatsby'


const Nav = () => 
<nav style={{ display: 'flex' }}>
    <ul style={{ display: 'flex', margin: 0, padding: 0 }}>
        <li style={{ display: 'block', 'margin-right': '1rem', position: 'relative' }}>
            <Link style={{ 'font-weight': 500, 'text-decoration': 'none', color: '#f43' }} to="/showreel">Showreel</Link>
        </li>
        <li style={{ display: 'block', 'margin-right': '1rem', position: 'relative' }}>
            <Link style={{ 'font-weight': 500, 'text-decoration': 'none', color: '#f43' }} to="/tv">TV</Link>
        </li>
        <li style={{ display: 'block', 'margin-right': '1rem', position: 'relative' }}>
            <Link style={{ 'font-weight': 500, 'text-decoration': 'none', color: '#f43' }} to="/about">About</Link>
        </li>
    </ul>
</nav>


export default Nav;