import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
   
    style={{
      background: `blue`,
      marginBottom: `1.45rem`,
    }}
  >
  <h1 
     style={{
       color: '#fff'
     }}
  >{ siteTitle }</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
