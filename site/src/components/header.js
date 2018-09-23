import React from 'react'
import { Link } from 'gatsby'
import Loadable from 'react-loadable';
const Loading = () => <div />
const Navigation = Loadable({
  loader: () => import("./Navigation" /* webpackChunkName: "navigation" */),
  loading: Loading
})
const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          HEADER TEST
        </Link>
      </h1>
      <Navigation />
    </div>
  </div>
)

export default Header
