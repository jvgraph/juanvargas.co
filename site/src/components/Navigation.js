import React, { Component } from 'react';
import {Link} from 'gatsby'
import "./navigation.scss"
class Navigation extends Component {
  render() {
    return (
      <div className={`navigation--container`}>
        <nav className={`navigation`}>
          <ul className={`menu container`}>
            <li className={`menu--item`}>
              <Link className={`menu--link`} to='/about'>about</Link>
            </li>
            <li className={`menu--item`}>work</li>
            <li className={`menu--item`}>contact</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;