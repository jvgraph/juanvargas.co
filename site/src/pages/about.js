import React, {Component} from 'react';
import Layout from "../components/layout"

class about extends Component {
  render() {
    return (
      <Layout>
        <div className='about'>
          <h1 className="page--title">
            Hello
            <span>.</span>
          </h1>
        </div>
      </Layout>
    );
  }
}

export default about;