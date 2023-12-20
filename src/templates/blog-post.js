import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "../styles/blog-post.module.css"
import { graphql } from 'gatsby'

export default function BlogPost({ data }) {
    const { html } = data.markdownRemark;
    const { title, featuredImg, date } = data.markdownRemark.frontmatter;
    
    return (
    <Layout>
    <div className={styles.post}>
            {/* <hr /> */}
            <h2 style={{color: "var(--secondary)", marginTop: "80px", fontSize: "1.16em"}}>{date}</h2>
            <h1 style={{marginBottom: "40px"}}>{title}</h1>
            {/* <h2>{Subtext}</h2> */}

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
        featuredImg {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`