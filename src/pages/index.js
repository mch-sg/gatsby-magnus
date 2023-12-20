import * as React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const Head = () => {
  <>
    <title>Magnus Hvidtfeldt</title>

    <meta charset="UTF-8" />
    <meta name="description" content="Magnus Hvidtfeldt's website." />
    <meta name="keywords" content="Build-in-public solopreneur startups blog" />
    <meta name="author" content="Magnus Chr. Hvidtfeldt" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:locale" content="en_US"></meta>
  </>
}

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Magnus Hvidtfeldt</h2>
          <h3>My name is Alex and I'm a software engineer.</h3>
          <Link className={styles.btn} to="/work">My work</Link>
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