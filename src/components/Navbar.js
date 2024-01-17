import { Link, useStaticQuery } from 'gatsby'
import React from 'react'
import { graphql } from 'gatsby'
import favIcon from "../images/head.png"
import { GatsbyImage, getImage } from "gatsby-plugin-image";



export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    

      file(relativePath: { eq: "head.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
}
  `);

  const { title } = data.site.siteMetadata;

  return (
    <nav>
        {/* <h1 className="nav-left">Magnus</h1> */}
        <div>
          <Link to="/" className="img" style={{width: "25px"}} >
            <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="img" style={{width: "auto", height: "auto"}} />
          </Link> 
        </div>

        <div className="links">
            <Link to="/">Home</Link> 
            <Link to="/article">Articles</Link> 
            <Link to="/work">Work</Link> 
            <Link to="/newsletter">Newsletter</Link> 
        </div>
    </nav>
  )
}
