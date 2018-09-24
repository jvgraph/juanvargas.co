import React, { Component } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
class Contact extends Component {
  render() {
    return (
      <Layout>
        <div className="page contact">
          <h1 className="page--title">Contact</h1>
          <div className="contact--content content">
            <Link to={`mailto:vjuan23@gmail.com`}>email me</Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
