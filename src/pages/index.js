import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Preview from '../components/preview'


const HomePage = () => (
<Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Hero/>
    <Preview/>
</Layout>
)

export default HomePage



