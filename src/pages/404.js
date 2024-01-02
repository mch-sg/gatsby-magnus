import React from 'react'
import LayoutNo from '../components/LayoutNoFooter'
import * as styles from "../styles/work.module.css"
import SEO from "../components/Seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import GIF from '../images/what.gif'


export default function NotFound() {
  return (
    <LayoutNo>
        <SEO title="NotFound" />
        <div className="bod">
        <div className={styles.work}>
            <h1 className="initHeading">404, I didn't find that one.</h1>
            <img src={GIF} style={{marginBottom: "80px"}} />
        </div>
        </div>
    </LayoutNo>
  )
}

