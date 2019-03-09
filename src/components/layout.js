/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import {createGlobalStyle} from "styled-components"
import Navbar from "./globals/navbar/Navbar"
const Layout = ( {children}) => {
  return (
    <React.Fragment>
       <GlobalStyle/>
       <Navbar />
      {children}
    </React.Fragment>
     
     
 
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300i');
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}

body{
  font-family: 'Roboto', sans-serif;
  color: rgba(225, 237, 233, 0.2);
  background-color: rgba(0,0,0,0.1);
}
`
export default Layout
