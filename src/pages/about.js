import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'



const About = () => (
  <Layout>
    <body>
        <SEO title="About" />

        <h1>About</h1>



        <Link to="/">Go back to the homepage</Link>
    </body>
  </Layout>
)

export default About



