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

export default function Home({ data }) {

  return (
    <>
    <div  className="bod">
    <SEO title="Home" />
    <section className={styles.header} style={{margin: "20px", maxWidth: "600px"}}>
      <div>
        <h1 className="initHeading">Coming soon.</h1>
        <h3 style={{marginBottom: "20px"}}>In the meantime, feel free to join my newsletter. Every week, I share my learnings from building a startup business. You will learn how to leverage your newsletter, and how to make friends by building in public.</h3>

        <MyForm />
        <h3 style={{marginBottom: "20px", fontSize: "1em", color: "var(--grey)"}}>Join 140+ other entrepreneurs.</h3>
      </div>

    </section>
    </div>
    </>
  )
}

