import React from 'react'
import Link from 'gatsby-link'
import Loadable from 'react-loadable'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import '../styles/pages/index.scss'
const Loading = () => <div />
const Hello = Loadable({
  loader: () =>
    import('../components/home/Hello' /* webpackChunkName: "hello" */),
  loading: Loading,
})
const IndexPage = ({ data }) => (
  <Layout className={`home`}>
    <Hello />
    <div className="home--section home--section-project">
      <ul>
        {data.allStrapiProject.edges
          .filter(project => project)
          .slice(0, 3)
          .map(project => (
            <li key={project.node.id}>
              <img
                src={require('../images/test-img.jpg')}
                alt={project.node.Title}
                draggable={false}
              />
              <h2>
                <Link
                  to={`/work/${project.node.Title.toLowerCase().replace(
                    / /g,
                    '-'
                  )}`}
                >
                  {project.node.Title}
                </Link>
              </h2>
            </li>
          ))}
      </ul>
    </div>
  </Layout>
)
export default IndexPage
export const pageQuery = graphql`
  query IndexQuery {
    allStrapiProject {
      edges {
        node {
          Title
          id
          image {
            id
            url
          }
        }
      }
    }
  }
`
