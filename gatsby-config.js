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
    {
      resolve: 'gatsby-plugin-scroll-position',
      options: {
        elements: [
          '.class-selector',
          '#id-selector',
          '[data-testid="test-selector"]',
          {
            selector: '#fallback-position',
            ensureInView: '#fallback-position ul li.scroll-to-me', // ensure this element is in view
          },
        ],
      },
    },
  ],
  
  siteMetadata: {
    title: "Magnus Hvidtfeldt",
    description: "Solopreneur by day, twin by birth. Building 6 startups in 6 months. Sharing what I learn from building in public, and how to stay consistent.",
    copyright: 'Copyright 2024 Magnus Hvidtfeldt',
    author: 'Magnus Hvidtfeldt',
    contact: 'hi@magnus.so'
  }
}
