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
        <h1>{title}</h1>
        <div className="links">
            <Link to="/">Home</Link> 
            <Link to="/work">Work</Link> 
            <Link to="/blog">Blog</Link> 
        </div>
    </nav>
  )
}
