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

export default function Home({ data }) {
  
  const works = data.allMarkdownRemark.nodes;
  const features = data.feature.nodes;
  // const image = getImage(features.childImageSharp.gatsbyImageData)

  return (
  <Layout>
    <SEO title="Home" />
    <section className={styles.header}>
      <div>
        <h1 className="initHeading">Magnus Chr. Hvidtfeldt</h1>
        <h3 style={{marginBottom: "20px"}}>I'm an aspiring software engineer and entrepreneur. Every week, I share my learnings from building startup businesses. You will learn how to set guiding principles, and how to make friends by building in public.</h3>

        <FormGrid />
        <h3 style={{marginBottom: "20px", fontSize: "1em", color: "var(--secondary)",opacity: "0.75"}}>Join 140+ other solopreneurs.</h3>

      </div>

      {/* <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="banner"/> */}

    </section>

    <section>
    <div className={styles1.work} >

          <div className={styles1.postWidth}> 
          <div className="initHeading m-title" style={{marginBottom: "20px", textAlign: "left"}}>Latest article</div>

          <div>

            {features.map(feature => (

              <div className="featured">
                  <div className={styles1.workId}>
                    <Link to={"/article/" + feature.frontmatter.slug} key={feature.id}>
                      <h3>{ feature.frontmatter.title }</h3>
                    </Link>
                    <p className={styles1.Cat}>{ feature.frontmatter.category }</p>

                    <p style={{textTransform: ""}} className={styles1.date}>{ format('{1} {0}, {2}', feature.frontmatter.dd, feature.frontmatter.mm, feature.frontmatter.yy) }</p>
                  </div>
                    <p style={{textAlign: "left"}} className={styles1.date}>{ feature.frontmatter.desc }</p>
                  {/* <GatsbyImage className="image" image={data.file.childImageSharp.gatsbyImageData} alt="banner"/> */}

                </div>
            ))}
            </div>
          </div>

      </div>
    </section>


    <section>
    <div className={styles1.work}>

          <div className={styles1.postWidth}> 
          <div className="initHeading m-title" style={{marginBottom: "30px", textAlign: "left"}}>All articles</div>


          <div>
            {works.map(work => (
              <div>
                  {/* <hr style={{margin: "15px auto"}}/> */}
                  <div className={styles1.workId}>
                    <Link to={"/article/" + work.frontmatter.slug} key={work.id}>
                      <h3>{ work.frontmatter.title }</h3>
                    </Link>
                    <p className={styles1.Cat}>{ work.frontmatter.category }</p>

                    <p style={{textTransform: ""}} className={styles1.date}>{ format('{1} {2}', work.frontmatter.dd, work.frontmatter.mm, work.frontmatter.yy) }</p>
                  </div>
                  <hr style={{margin: "10px auto"}}/>
                </div>
            ))}
            </div>
          </div>

      </div>
    </section>


    <section>
    <div className={styles1.work}>

          <div className={styles1.postWidth}> 
          <div className="initHeading m-title" style={{marginBottom: "20px", textAlign: "left"}}>Selected work</div>



          <div>
              <div className="featured" style={{marginBottom: "10px"}}>
                  <div className={styles1.workId}>
                  <Link to="https://letdir.com" target="_blank">
                      <h3>Letdir</h3>
                      <p style={{textAlign: "left"}} >A newsletter directory</p>
                    </Link>
                    <p className={styles1.Cat} style={{margin: "auto 0px"}} >Startup</p>
                    <p className={styles1.date} style={{margin: "auto 0px"}} >Jan 2024</p>
                  </div>
                </div>
            </div>


          <div>
              <div className="featured" style={{marginBottom: "10px"}}>
                  {/* <hr style={{margin: "15px auto"}}/> */}
                  <div className={styles1.workId}>
                  <div> {/* Link to={"/work/unicopy"} */}
                      <h3>Unicopy</h3>
                      <p style={{textAlign: "left"}} >Copy unicode characters</p>
                    </div>
                    <p className={styles1.Cat} style={{margin: "auto 0px"}} >Startup</p>
                    <p className={styles1.date} style={{margin: "auto 0px"}} >Jan 2022</p>

                  </div>
                </div>
            </div>



          </div>
      </div>
    </section>


  </Layout>
  )
}


export const query = graphql`
  query MyQuery {
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
      }
    }
  }

  feature: allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {status: {eq: "public"}}}
    limit: 1
    ) {
    nodes {
      frontmatter {
        slug
        title
        desc
        category
        date
        dd
        mm
        yy
    }
  }
}

file(relativePath: { eq: "thumbs/e-5.png" }) {
  childImageSharp {
    gatsbyImageData(layout: CONSTRAINED)
  }
}

  }
`
