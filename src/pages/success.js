import * as React from "react"
import Layout from "../components/Layout"
import FormGrid from "../components/FormGrid"
import MyForm from "../components/Form"
import SEO from "../components/Seo"
import * as styles from "../styles/home.module.css"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles1 from "../styles/work.module.css"
import { format } from 'react-string-format';

export default function Success({ data }) {

  return (
    <>
    <div  className="bod">
    <SEO title="Home" />
    <section className={styles.header}>
      <div>
        <h1 className="initHeading">Thank you for signing up.</h1>
        <h3 style={{marginBottom: "20px"}}>In the meantime, feel free to join my newsletter. Every week, I share my learnings from building a startup business. You will learn how to leverage your newsletter, and how to make friends by building in public.</h3>

        {/* <MyForm /> */}
        {/* <h3 style={{marginBottom: "20px", fontSize: "1em", color: "var(--grey)"}}>Join 140+ other entrepreneurs.</h3> */}

      </div>

    </section>
    </div>
    </>
  )
}


export const query = graphql`
  query MyQuery {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {status: {eq: "public"}}}
      limit: 25
      ) {
      nodes {
        frontmatter {
          slug
          title
          category
          date
          dd
          mm
          yy
      }
    }
  }

  feature: allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {status: {eq: "public"}}}
    limit: 1
    ) {
    nodes {
      frontmatter {
        slug
        title
        category
        date
        dd
        mm
        yy
    }
  }
}

file(relativePath: { eq: "thumbs/e-5.png" }) {
  childImageSharp {
    gatsbyImageData(layout: CONSTRAINED)
  }
}

  }
`