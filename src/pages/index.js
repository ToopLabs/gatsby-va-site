import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'


const HomePage = () => (
  <Layout>
    <body>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />

        <section style={{ padding: '4rem 4rem 2rem' }}>
            <h1 style={{ 'font-size': '7.5rem', 'max-width': '8em', display: 'block', padding: 0, margin: 0, 'line-height': '0.8em', 'font-weight': 700, 'padding-bottom': '0.3em', 'overflow-x': 'hidden' }}>
                <span style={{ 'font-size': '7.5rem', 'padding-right': '0.25em', float: 'left' }}>Structured</span>
                <span style={{ 'font-size': '7.5rem', 'padding-right': '0.25em', float: 'left' }}>Content</span>
                <span style={{ 'font-size': '7.5rem', 'padding-right': '0.25em', float: 'left' }}>Done</span>
                <span style={{ 'font-size': '7.5rem', 'padding-right': '0.25em', float: 'left' }}>Right</span>
            </h1>
        </section>

        <Link to="/page-2/">Go to page 2</Link>
    </body>
  </Layout>
)

export default HomePage



