import React from 'react'
import Link from 'gatsby-link'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Hello from "../components/home/Hello"
const IndexPage = ({data}) => (
  <Layout>
    <Hello />
    <div>
    <ul>
      {data
        .allStrapiProject
        .edges.filter(project => project)
        .map(project => (
          <li key={project.node.id}>
            <h2>
              <Link to={`/${project.node.Title.toLowerCase().replace(/ /g, '-')}`}>{project.node.Title}</Link>
            </h2>
          </li>
        ))}
    </ul>
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