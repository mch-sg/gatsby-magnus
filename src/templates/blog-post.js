import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "../styles/blog-post.module.css"
import { graphql } from 'gatsby'
import { format } from 'react-string-format';

export default function BlogPost({ data }) {
    const { html } = data.markdownRemark;
    const { title, category, featuredImg, date, dd, mm, yy } = data.markdownRemark.frontmatter;
    const { author } = data.site.siteMetadata;
    
    return (
    <Layout>
    <div className={styles.post}>
          {/* 
          className={styles.res}
          */}
          <div style={{marginTop: "80px", marginBottom: "30px"}}>
            {/* <hr /> */}
            <h2 style={{color: "var(--secondary)", marginTop: "0px", fontSize: "1em"}}>{format('{0} {1}, {2}', dd, mm, yy) } in <a href={"/category/" + category}>{category}</a></h2>
            <h1 style={{marginBottom: "0px"}}>{title}</h1>
            {/* <h3 style={{color: "var(--secondarygrey)", marginTop: "0px", fontSize: "1.25em", marginBottom: "0px"}}>by {author}</h3> */}
            {/* <h2>{Subtext}</h2> */}
          </div>
          <div className={styles.featured}>
            {/* <hr /> */}
            {/* {<GatsbyImage className="image" image={getImage(featuredImg.childImageSharp.gatsbyImageData)} alt="Banner" />} */}
          </div>

          <div style={{marginBottom: "80px"}} className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    </Layout>
  )
}

export const query = graphql`
query BlogPost($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date
        dd
        mm
        yy
        category
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`