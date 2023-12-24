import * as React from "react"
import Layout from "../components/Layout"
import FormGrid from "../components/FormGrid"
import MyForm from "../components/Form"
import SEO from "../components/Seo"
import * as styles from "../styles/home.module.css"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  // const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <SEO title="Home" />
      <section className={styles.header}>
        <div>
          <h1 className="initHeading">Magnus Hvidtfeldt</h1>
          <h3 style={{marginBottom: "20px"}}>I'm a software engineer and entrepreneur.</h3>
          {/* <Link className={styles.btn} to="/work">My work</Link> */}

          {/* <h3 style={{marginTop: "15px"}}>Join my newsletter!</h3> */}
          <FormGrid />
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