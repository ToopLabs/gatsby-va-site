import React from 'react'
import { Link } from 'gatsby'
import shot1 from '../images/shot1.png'
import shot2 from '../images/shot2.png'


import './hero.css'

const Hero = () =>
<section className="hero">
    <h1>
        <span>Britt</span>
        <span>Clennett</span>
    </h1>
    {/*<div className="shots">
        <img className="shot2" src={shot1} alt="Shot1" />
        <img className="shot1" src={shot2} alt="Shot2" />
    </div>*/}
    <h2>
        Correspondent
    </h2>
</section>



export default Hero;