import React from 'react'
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link } from 'gatsby'

export default function NotFound() {
  return (
    <Layout>
        <div className="FOFContainer">
          <h1 style={{textAlign: "center"}}>404!</h1>
          {/* <Link style={{textAlign: "center", alignItems: "center"}} className={styles.btn} to="/">Go back</Link> */}
        </div>
    </Layout>
  )
}
