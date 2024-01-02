import React from 'react'
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import * as styles from "../../styles/work.module.css"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { format } from 'react-string-format';
import * as styles1 from "../../styles/projects.module.css"


export default function WorkProjects({ data }) {
  return (
    <Layout>
        <SEO title="Work" />


            <section>
    <div className={styles1.work}>

          <div className={styles1.postWidth}> 
            <h1 className="initHeading" style={{marginBottom: "80px"}}>Work</h1>


          <div>
              <div className="featured" style={{marginBottom: "5px"}}>
                  <div className={styles1.workId}>
                  <div style={{opacity: "0.25"}} >
                      <h3>Letdir</h3>
                      <p style={{textAlign: "left"}} >A newsletter directory</p>
                    </div>
                    <p className={styles1.Cat} style={{margin: "auto 0px"}} ></p>
                    <p className={styles1.Cat} style={{margin: "auto 0px"}} >Startup</p>
                  </div>
                </div>
            </div>


          <div>
              <div className="featured" style={{marginBottom: "5px"}}>
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
  query Daq {

    file(relativePath: { eq: "thumbs/e-5.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }

  }
`