/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 * 
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
    pathPrefix: "/frogsong",
    plugins: [{
        resolve: `gatsby-source-contentful`,
        options: {
            spaceId: process.env.GATSBY_SPACE_ID,
            // Learn about environment variables: https://gatsby.dev/env-vars
            accessToken: process.env.GATSBY_ACCESS_TOKEN,
        },
    }, `gatsby-plugin-image`,
    ],
}




