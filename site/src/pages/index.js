import React from 'react'
import Link from 'gatsby-link'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
const IndexPage = ({data}) => (
  <Layout>
    <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data
        .allStrapiProject
        .edges
        .map(document => (
          <li key={document.node.id}>
            <h2>
              <Link to={`/${document.node.Title.toLowerCase().replace(/ /g, '-')}`}>{document.node.Title}</Link>
            </h2>
          </li>
        ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
  </Layout>
)
export default IndexPage
export const pageQuery = graphql `  
  query IndexQuery {
    allStrapiProject {
      edges {
        node {
          Title,
          description,
          id,
          image{
            id,
            mime,
            size,
            url
          }
        }
      }
    }
  }
`