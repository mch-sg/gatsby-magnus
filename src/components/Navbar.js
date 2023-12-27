import { Link, useStaticQuery } from 'gatsby'
import React from 'react'
import { graphql } from 'gatsby'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <nav>
        <h1 className="nav-left">Magnus</h1>
        <div className="links">
            <Link to="/">Home</Link> 
            <Link to="/article">Articles</Link> 
            <Link to="/work">Work</Link> 
            <Link to="/newsletter">Newsletter</Link> 
        </div>
    </nav>
  )
}
