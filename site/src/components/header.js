import React from 'react'
import {Link} from 'gatsby'
import Loadable from 'react-loadable';
import PropTypes from 'prop-types'
import "./header.scss";
const Loading = () => <div/>;
const Hambergur = Loadable({
  loader: () => import ("./hamburger"/* webpackChunkName: "hamburger" */),
  loading: Loading
});
const Navigation = Loadable({
  loader: () => import ("./Navigation" /* webpackChunkName: "navigation" */),
  loading: Loading
});

class Header extends React.Component {
  static propTypes = {
    siteTitle: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      nav: false
    }
  }
  render() {
    //const {siteTitle} = this.props;
    return (
      <div className="header--container">
        <div className="header">
          <Hambergur/>
          <h1 style={{
            margin: 0
          }}>
            <Link to="/">
              Juan Vargas
            </Link>
          </h1>
          <Navigation/>
        </div>
      </div>
    )
  }
}

export default Header
