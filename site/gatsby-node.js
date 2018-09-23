/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
const makeRequest = (graphql, request) => new Promise((resolve, reject) => {  
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      return result;
    })
  )
});
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {  
  const { createPage } = boundActionCreators;
  const getProjects = makeRequest(graphql, `
    {
      allStrapiProject {
        edges {
          node {
            id,
            Title
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each project.
    result.data.allStrapiProject.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.Title.toLowerCase().replace(/ /g, '-')}`,
        component: path.resolve(`src/templates/project.js`),
        context: {
          id: node.id,
          Title: node.Title
        },
      })
    })
  });
  // Query for articles nodes to use in creating pages.
  return getProjects;
};