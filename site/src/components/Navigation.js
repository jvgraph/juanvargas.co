import React, { Component } from 'react';
import {Link} from 'gatsby'
import "./navigation.scss"
class Navigation extends Component {
  render() {
    return (
      <div className={`navigation--container`}>
        <nav>
          <ul>
            <li>
              <Link to='/about'>about</Link>
            </li>
            <li>work</li>
            <li>contact</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;