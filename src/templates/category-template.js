import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import * as styles from "../styles/work.module.css"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { format } from 'react-string-format';

export default function WorkT({ data }) { 
  const works = data.allMarkdownRemark.nodes;
  const { title, category, featuredImg, date } = data.markdownRemark.frontmatter;
  
  return (
    <Layout>
    <SEO title={`${category} articles`} />
        <div className={styles.work}>
            <h1 className="initHeading" style={{marginBottom: "80px"}}>{category} Articles</h1>

            <div className={styles.postWidth}> 
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
    </Layout>
  )
}

// export page query
export const query = graphql`
query Cat($category: String) {
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {status: {eq: "public"}, category: {eq: $category}}}
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

markdownRemark(frontmatter: {category: {eq: $category}}) {
  html
  frontmatter {
    title
    date
    category
    featuredImg {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
}
}
`