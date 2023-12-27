import React from 'react'
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import * as styles from "../../styles/work.module.css"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { format } from 'react-string-format';

export default function Work() {
  return (
    <Layout>
        <SEO title="Work" />
        <div className={styles.work}>
            <h1 className="initHeading" style={{marginBottom: "80px"}}>Work</h1>

            <div className={styles.postWidth}> 
            <p>asds</p>
            <p>asds</p>
            </div>

        </div>
    </Layout>
  )
}
