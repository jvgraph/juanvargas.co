import React from "react"
import "./hamburger.scss"
const Hamburger = () => {
  return (
    <div className="menu-toggle">
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

export default Hamburger;