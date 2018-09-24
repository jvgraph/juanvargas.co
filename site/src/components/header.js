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
  toggleNav = () => {
    this.setState({
      nav: !this.state.nav
    })
  }
  render() {
    //const {siteTitle} = this.props;
    const {nav} = this.state;
    return (
      <div className="header--container">
        <div className="header container">
          <h1 className={`site--brand name`}>
            <Link to="/">
              Juan Vargas
            </Link>
          </h1>
          <Hambergur toggleNav={this.toggleNav} isNavOpen={nav}/>
          {
            nav && (
              <Navigation isNavOpen={nav}/>
            )
          }
        </div>
      </div>
    )
  }
}

export default Header
