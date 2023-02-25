import type { GatsbyConfig } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    themeColor: '#63BC47',
    title: `Simonyi Károly Szakkollégium`,
    titleTemplate: `%s - Simonyi Károly Szakkollégium`,
    description:
      'A Simonyi Károly Szakkollégium egy hallgatói szakmai szervezet, amely a BME Villamosmérnöki és Informatikai Karán működik.',
    siteUrl: `https://simonyi.bme.hu`,
    image: '/cover.png',
    ogType: 'website',
    ogImageType: 'image/png',
    ogImageWidth: '960',
    ogImageHeight: '540',
    twitterCard: 'summary_large_image',
    twitterImageAlt: 'A picture showing the logo of Simonyi Károly Szakkollégium',
    twitterSite: 'simonyiszakkoli',
    twitterCreator: 'simonyiszakkoli'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
        /**
         * @property {boolean} [isBaseProvider=false]
         * if true, will render `<ChakraBaseProvider>`
         */
        isBaseProvider: false
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicon.svg'
      }
    },

    /* See: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/ */
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: []
      }
    },

    /* See: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/ */
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },

    /* See: https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/ */
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_ID]
      }
    }
  ]
};

export default config;
