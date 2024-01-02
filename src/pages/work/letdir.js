import React from 'react'
import Layout from '../../components/Layout'
import * as styles from "../../styles/work.module.css"
import SEO from "../../components/Seo"

export default function letdir() {
  return (
    <Layout>
        <SEO title="Letdir" />
        <div className={styles.work}>
            <h1 className="initHeading" style={{marginBottom: "80px"}}>Letdir</h1>
        </div>
    </Layout>
  )
}
