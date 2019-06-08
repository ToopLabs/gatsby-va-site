import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'



const Page2 = () => (
  <Layout>
    <body>
        <SEO title="Page two" />




        <Link to="/">Go back to the homepage</Link>
    </body>
  </Layout>
)

export default Page2



