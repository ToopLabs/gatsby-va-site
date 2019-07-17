import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'



const Portfolio = () => (
  <Layout>
    <body>
        <SEO title="Portfolio" />

        <h1>Portfolio</h1>



        <Link to="/">Go back to the homepage</Link>
    </body>
  </Layout>
)

export default Portfolio



