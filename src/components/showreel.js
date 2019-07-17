import React from 'react'
import { Link } from 'gatsby'
import showreelVideo from '../images/Britt_Clennett_Apri_2019.mp4'


import './showreel.css'

const Showreel = () =>
<section className="showreel">
    <video className="video" muted controls loop preload="auto">
        <source src={showreelVideo} type="video/mp4" media="all and (min-width:769px)" />
    </video>
</section>



export default Showreel;