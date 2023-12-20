import React from 'react'
import Layout from "../components/Layout"
import * as styles from "../styles/work.module.css"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Work({ data }) { 
  console.log(data)

  const works = data.allMarkdownRemark.nodes;
  
  return (
    <Layout>
        <div className={styles.work}>
            <h1>Blog</h1>

            <div className={styles.workId}> 
              {works.map(work => (
                <Link to={"/blog/" + work.frontmatter.slug} key={work.id}>
                  <div>
                    {/* <GatsbyImage className="image" image={getImage(work.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="Banner" /> */}
                    <h3>{ work.frontmatter.title }</h3>
                    <p>{ work.frontmatter.date }</p>
                  </div>
                </Link>
              ))}

            </div>
        </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
query WorkPage {
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {status: {eq: "draft"}, category: {eq: "Site"}}}
    limit: 25
    ) {
    nodes {
      frontmatter {
        slug
        title
        date
        thumb {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
      }
    }
  }
}
}
`

