import React from 'react'
//import Link from 'gatsby-link'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

const ProjectTemplate = ({data}) => {
  const page = data.strapiProject;
  console.log(page)
  return (
    <Layout>
      <div>
        <h1>{page.Title}</h1>
      </div>
      <div className="description">
        {page.description}
      </div>
    </Layout>
  )
}
export default ProjectTemplate
export const query = graphql `  
  query ProjectTemplate($id: String!) {
    strapiProject(id: {eq: $id}) {
      Title,
      description,
      image{
        url,
        id
      }
    }
  }`