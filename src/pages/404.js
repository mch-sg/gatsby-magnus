import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/work.module.css"
import SEO from "../components/Seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import GIF from '../images/404.gif'


export default function NotFound() {
  return (
    <Layout>
        <SEO title="NotFound" />
        <div className={styles.work}>
            <h1 className="initHeading" style={{marginBottom: "80px"}}>404, I didn't find that one.</h1>
        </div>
    </Layout>
  )
}

