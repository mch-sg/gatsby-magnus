import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import * as styles from "../styles/home.module.css";

import * as styles1 from "../styles/work.module.css";
import MyForm from "../components/Form";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { format } from "react-string-format";

export default function Work({ data }) {
  const works = data.allMarkdownRemark.nodes;
  const dNewFormat = format("%d %B, %Y");

  // format('{0}/{1}/{2}', work.frontmatter.dd, work.frontmatter.mm, work.frontmatter.yy)

  return (
    <Layout>
      <SEO title="Newsletter" />
      <section className={styles.header} style={{ maxWidth: "700px" }}>
        <div>
          <h1 className="initHeading">Subscribe to my newsletter!</h1>
          <h3 style={{ marginBottom: "20px" }}>
            Every week, I share what I learn from building startup businesses.
            You will learn about the journey, get to share our common struggles,
            and learn how to leverage your newsletter.
          </h3>

          <MyForm />
          <h3
            style={{
              marginBottom: "20px",
              fontSize: "1em",
              color: "var(--grey)",
            }}
          >
            Join 140+ aspiring entrepreneurs.
          </h3>
        </div>

        {/* <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="banner"/> */}

        <div className="initHeading" style={{ marginBottom: "80px" }}>
          <hr />
        </div>
      </section>
      <div className={styles1.work}>
        <h1 style={{ marginBottom: "80px" }}>Past newsletter issues</h1>

        <div className={styles1.postWidth}>
          {/* 
            className={styles1.container}
            */}
          <div>
            {works.map((work) => (
              <div>
                {/* <hr style={{margin: "15px auto"}}/> */}
                <div className={styles1.workId}>
                  <Link to={"/article/" + work.frontmatter.slug} key={work.id}>
                    {/* <GatsbyImage className="image" image={getImage(work.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="Banner" /> */}
                    <h3>{work.frontmatter.title}</h3>
                  </Link>
                  <p className={styles1.Cat}>{work.frontmatter.category}</p>

                  <p style={{ textTransform: "" }} className={styles1.date}>
                    {format(
                      "{1} {2}",
                      work.frontmatter.dd,
                      work.frontmatter.mm,
                      work.frontmatter.yy
                    )}
                  </p>
                </div>
                <hr style={{ margin: "10px auto" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export page query
export const query = graphql`
  query LetterPage {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          status: { eq: "public" }
          category: { eq: "Newsletter" }
        }
      }
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
  }
`;
