import React from 'react'
import { Link } from 'gatsby'
import Nav from '../components/nav.js'

const Header = () => 
<header style={{
        color: '#f43',
        padding: '1rem',
        display: 'flex',
        'justify-content': 'flex-end',
        'align-items': 'center',
    }}>
    <Link to="/" style={{ 'margin-right': 'auto', 'font-weight': 500, 'text-decoration': 'none', color: '#f43' }}>Britt Clennett</Link>
    <Nav />
</header>


export default Header;