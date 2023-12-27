import * as React from "react"
import Layout from "../components/Layout"
import MyForm from "../components/Form"
import SEO from "../components/Seo"
import * as styles from "../styles/home.module.css"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Join({ data }) {
  // const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <SEO title="Join my newsletter" />
      <section className={styles.header} style={{maxWidth: "550px"}}>
        <div>
          <h1 className="initHeading">Subscribe to my newsletter!</h1>
          <h3 style={{marginBottom: "20px"}}>Every week, I share my learnings from building a startup business. You will learn how to leverage your newsletter, and how to make friends by building in public.</h3>

          <MyForm />
          <h3 style={{marginBottom: "20px", fontSize: "1em", color: "var(--grey)"}}>Join 140+ aspiring entrepreneurs.</h3>
        </div>

        {/* <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="banner"/> */}

      </section>
    </Layout>
  )
}


export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`