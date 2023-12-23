/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `work`,
        // Path to the directory
        path: `${__dirname}/src/work/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Magnus Hvidtfeldt",
    description: "Some random description",
    copyright: 'Copyright 2024 Magnus Hvidtfeldt',
    author: 'Magnus Chr. Hvidtfeldt',
    contact: 'magnus.hvidtfeldt@gmail.com'
  }
}
