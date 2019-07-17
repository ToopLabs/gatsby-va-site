import React from 'react'
import { Link } from 'gatsby'
import acydLogo from '../images/acyd_logo_black.png'
import atvLogo from '../images/atv_logo_black.png'
import bluincLogo from '../images/blu_inc_logo_black.png'
import cgtnLogo from '../images/cgtn_logo_black.png'
import reutersLogo from '../images/reuters_logo_black.png'
import unitedNationsLogo from '../images/united_nations_logo_black.png'

import './clients.css'

const Clients = () =>
<section className="clients">
    <a href="https://www.thomsonreuters.com/en.html" className="link">
        <img className="logo" src={reutersLogo} alt="Reuters Logo" />
    </a>
    <a href="https://www.cgtn.com" className="link">
        <img className="logo" src={cgtnLogo} alt="CGTN Logo" />
    </a>
    <a href="https://acyd.org.au" className="link">
        <img className="logo" src={acydLogo} alt="ACYD Logo" />
    </a>
    <a href="https://www.hkatv.com" className="link">
        <img className="logo" src={atvLogo} alt="ATV Logo" />
    </a>
    <a href="https://www.un.org" className="link">
        <img className="logo" src={unitedNationsLogo} alt="United Nations Logo" />
    </a>
    <a href="http://www.bluinc.com.my" className="link">
        <img className="logo" src={bluincLogo} alt="BluInc Logo" />
    </a>
</section>



export default Clients;