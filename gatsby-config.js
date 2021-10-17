const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Philipp Lentzen`,
    description: `Hi✌️, mein Name ist Philipp, ich bin Student, 20 Jahre alt, komme aus Aachen und meine Zeit verbringe ich mit dem Verschieben von Pixeln im Browser.`,
    url: `https://philipplentzen.dev`,
    email: `kontakt@philipplentzen.dev`,
    author: `@philipplentzen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-portal`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(`src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `data`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio-philipp-lentzen`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#1E3F56`,
        theme_color: `#FCBA04`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`kanit\:100,200,300,500,700,900`, `anonymus pro\:700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/Layout.tsx`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 90,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
