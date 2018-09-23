module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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

