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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-JH0TZ6Y6X4" // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
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
