const path = require('path')

module.exports = {
    pathPrefix: '/britt',
    siteMetadata: {
    title: 'Britt Clennett',
    description:
      'See my latest articles, stories and showreels',
    author: 'Jordan',
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Britt Clennett',
        short_name: 'Britt',
        start_url: '/britt',
        background_color: '#5abcbd',
        theme_color: '#5abcbd',
        display: 'minimal-ui',
        icon: 'src/images/britt-sketch-square.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
