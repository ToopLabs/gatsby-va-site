import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Preview from '../components/preview'
import Clients from '../components/clients'
import Showreel from '../components/showreel'
import Bio from '../components/bio'
import Banner from '../components/banner'
import protestShot from '../images/protest_shot.jpg'
import showreelVideo from '../images/Britt_Clennett_Apri_2019.mp4'

const HomePage = () => (
<Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Hero />
    <Banner>
        <video muted controls loop preload="auto">
            <source src={showreelVideo} type="video/mp4" media="all and (min-width:769px)" />
        </video>
    </Banner>
    <Bio />
    <Banner>
        <img src={protestShot} />
    </Banner>
    <Clients />
    <Preview />
</Layout>
)

export default HomePage


