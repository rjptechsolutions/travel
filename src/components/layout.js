/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 * //import { useStaticQuery, graphql } from "gatsby"

 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar/index"
import "./layout.css"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
