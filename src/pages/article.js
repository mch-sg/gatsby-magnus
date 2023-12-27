import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import * as styles from "../styles/work.module.css"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { format } from 'react-string-format';

export default function Work({ data }) { 

  const works = data.allMarkdownRemark.nodes;
  const dNewFormat = format('%d %B, %Y');

  // format('{0}/{1}/{2}', work.frontmatter.dd, work.frontmatter.mm, work.frontmatter.yy)
  
  return (
    <Layout>
    <SEO title="Articles" />
        <div className={styles.work}>
            <h1 className="initHeading" style={{marginBottom: "80px"}}>Articles</h1>

            <div className={styles.postWidth}> 
            {/* 
            className={styles.container}
            */}
            <div>
              {works.map(work => (
                <div>
                    {/* <hr style={{margin: "15px auto"}}/> */}
                      <div className={styles.workId}>
                        <Link to={"/article/" + work.frontmatter.slug} key={work.id}>
                          {/* <GatsbyImage className="image" image={getImage(work.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="Banner" /> */}
                          <h3>{ work.frontmatter.title }</h3>
                        </Link>
                        <p className={styles.Cat}>{ work.frontmatter.category }</p>

                        <p style={{textTransform: ""}} className={styles.date}>{ format('{1} {2}', work.frontmatter.dd, work.frontmatter.mm, work.frontmatter.yy) }</p>
                      </div>
                    <hr style={{margin: "10px auto"}}/>
                  </div>
              ))}
              </div>
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
    filter: {frontmatter: {status: {eq: "public"}}}
    limit: 25
    ) {
    nodes {
      frontmatter {
        slug
        title
        category
        date
        dd
        mm
        yy
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

