import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "../styles/blog-post.module.css"
import { graphql } from 'gatsby'

export default function BlogPost({ data }) {
    const { html } = data.markdownRemark;
    const { title, stack, featuredImg, date } = data.markdownRemark.frontmatter;
 
    return (
    <Layout>
    <div className={styles.post}>
            <h1>{title}</h1>
            {/* <h2>{stack}</h2> */}
            <h2>{date}</h2>

            <div className={styles.featured}>
            {<GatsbyImage className="image" image={getImage(featuredImg.childImageSharp.gatsbyImageData)} alt="Banner" />}
            </div>

            <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
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