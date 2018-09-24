import React from "react"
import PropTypes from 'prop-types'

import "./hamburger.scss"
const Hamburger = ({isNavOpen, toggleNav}) => {
  return (
    <div className={`menu-toggle${isNavOpen ? " active" : ""}`} onClick={() => toggleNav()}>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="cross">
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
Hamburger.propTypes = {
  isNavOpen: PropTypes.bool,
  toggleNav: PropTypes.func
}
export default Hamburger;