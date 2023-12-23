import * as React from "react"
import Layout from "../components/Layout"
import MyForm from "../components/Form"
import SEO from "../components/Seo"
import * as styles from "../styles/home.module.css"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// export const Head = () => {
//   <>
//     <title>Magnus Hvidtfeldt</title>

//     <meta charset="UTF-8" />
//     <meta name="description" content="Magnus Hvidtfeldt's website." />
//     <meta name="keywords" content="Build-in-public solopreneur startups blog" />
//     <meta name="author" content="Magnus Chr. Hvidtfeldt" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta property="og:locale" content="en_US"></meta>
//   </>
// }

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <SEO title="Home" />
      <section className={styles.header}>
        <div>
          <h1 className="initHeading">Magnus Hvidtfeldt</h1>
          <h3 style={{marginBottom: "20px"}}>I'm a software engineer and entrepreneur.</h3>
          {/* <Link className={styles.btn} to="/work">My work</Link> */}

          {/* <h3 style={{marginTop: "15px"}}>Join my newsletter!</h3> */}
          <MyForm />
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