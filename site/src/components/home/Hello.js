import React, { Component } from 'react'
import { Link } from 'gatsby'
import './hello.scss'
class Hello extends Component {
  render() {
    return (
      <div className={`hello section`}>
        <div className="about--section section">
          <h1 className="page--title">
            Hello
            <span className={`blink`}>_</span>
          </h1>
          <div className="copy">
            <h2>
              My name is Juan Vargas, a web developer based in New York City.
            </h2>

            <div className="fav--quote">
              <blockquote>
                Logic will get you from A to B. Imagination will take you
                everywhere.
                <div className="name">-Albert Einstein</div>
              </blockquote>
            </div>
            <Link to={'/about'}>more about me here</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Hello
