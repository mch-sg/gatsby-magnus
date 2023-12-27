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
    <SEO title="Thank you" />
    <section className={styles.header}  style={{margin: "20px", maxWidth: "600px"}}>
      <div>
        <h1 className="initHeading">Thank you for signing up. Check your email to confirm your subscription.</h1>
        <h3 style={{marginBottom: "20px"}}>In the meantime, feel free to check out my other socials. Here, I also share about my learnings from building a startup business. </h3>

        <div className="links" style={{marginTop: "30px", fontSize: "1.1em"}}>
                <Link to="https://x.com/himagnus"  target="_blank">Twitter</Link> 
                <Link to="https://github.com/mch-sg"  target="_blank">GitHub</Link> 
                <Link to="https://www.linkedin.com/in/magnushvidtfeldt/"  target="_blank">LinkedIn</Link> 
                {/* <Link to="https://youtube.com/@magnushvidtfeldt" target="_blank">YouTube</Link>  */}
            </div>

      </div>

    </section>
    </div>
    </>
  )
}

