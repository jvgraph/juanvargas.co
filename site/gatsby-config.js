module.exports = {
  siteMetadata: {
    title: 'Juan Vargas',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-plugin-sass"
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        contentTypes: [`project`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
    'gatsby-plugin-offline',
  ],
}

