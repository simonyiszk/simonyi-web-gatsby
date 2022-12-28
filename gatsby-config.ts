import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Simonyi Károly Szakkollégium`,
    titleTemplate: `%s | Simonyi Károly Szakkollégium`,
    siteUrl: `https://simonyi.bme.hu`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "@chakra-ui/gatsby-plugin", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/simonyi-simple-512.png"
      }
    },

    /* See: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/ */
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [],
      },
    },

    /* See: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/ */ 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }, 

    /* See: https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/ */
    {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          trackingIds: [process.env.GOOGLE_ANALYTICS_ID]
        },
    }
  ]
};

export default config;
