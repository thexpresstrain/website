require('dotenv').config();

const {
  siteName,
  siteDescription,
  author,
  siteUrl,
  contact,
  remoteAssetLogo,
  business,
  eCommerce,
  marketing,
  socialMedia,
} = require('./src/Metadata/site-config');

module.exports = {
  siteMetadata: {
    siteName,
    siteDescription,
    author,
    siteUrl,
    contact,
    remoteAssetLogo,
    business,
    eCommerce,
    marketing,
    socialMedia,
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: process.env.GTM_ID,
    //     includeInDevelopment: false,
    //     defaultDataLayer: { platform: 'gatsby' },
    //   },
    // },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `www-thexpresstrain-com`,
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: process.env.GHOST_URL,
        contentApiKey: process.env.GHOST_API_KEY,
      },
    },
    {
      // Install plugin before using
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
      },
    },
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteName,
        short_name: siteName,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
  ],
};
