import React from 'react'
import SEO from "../components/Seo"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link } from 'gatsby'

export default function NotFound() {
  return (
    <>
    <div  className="bod">
    <SEO title="Home" />
    <section className={styles.header}>
      <div>
        <h1 className="initHeading">404.</h1>
        <h3>
        <Link to="/">Go home</Link>
        </h3>

      </div>

    </section>
    </div>
    </>
  )
}
