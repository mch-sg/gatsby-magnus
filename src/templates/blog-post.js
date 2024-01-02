import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import FormGrid from "../components/FormGrid"
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
    <SEO title={title} />
    <div className={styles.post}>
          {/* 
          className={styles.res}
          */}
          <div className="initHeading" style={{marginBottom: "30px"}}>
            {/* <hr /> */}
            <h2 style={{color: "var(--secondary)", marginBottom: "20px", fontSize: "1em"}}>{format('{1} {0}, {2}', dd, mm, yy) } <a className="Tag" href={"/category/" + category}>{category}</a></h2>
            <h1 style={{marginBottom: "0px"}}>{title}</h1>
            {/* <h3 style={{color: "var(--secondarygrey)", marginTop: "0px", fontSize: "1.25em", marginBottom: "0px"}}>by {author}</h3> */}
            {/* <h2>{Subtext}</h2> */}
          </div>
          <div className={styles.featured}>
            {/* <hr /> */}
            {/* {<GatsbyImage className="image" image={getImage(featuredImg.childImageSharp.gatsbyImageData)} alt="Banner" />} */}
          </div>

          <div style={{marginBottom: "80px"}} className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />

          {/* <hr />
        <h1 className="initHeading">Join my newsletter</h1>
        <h3 style={{color: "var(--secondary)", marginBottom: "20px", fontSize: "1em", fontWeight: "400"}}>Every week, I share my learnings from building startup businesses. You will learn how to set guiding principles, and how to make friends by building in public.</h3>

        <FormGrid />
        <h3 style={{marginBottom: "20px", fontSize: "1em", color: "var(--grey)"}}>Join 140+ other solopreneurs.</h3> */}
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