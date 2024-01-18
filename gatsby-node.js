const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Blog post template
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js');

  // Category template
  const categoryTemplate = path.resolve('./src/templates/category-template.js');

  // Newsletter post template
  const newsletterPostTemplate = path.resolve('./src/templates/newsletter-post.js');

  // Combined GraphQL query
  const result = await graphql(`
    query AllPages {
      blogPosts: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { status: { eq: "public" } } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }

      categories: allMarkdownRemark {
        nodes {
          frontmatter {
            category
          }
        }
      }

      newsletters: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { category: { eq: "Newsletter" } } }
      ) {
        nodes {
          frontmatter {
            slugNew
          }
        }
      }
    }
  `);

  // Create pages for blog posts
  result.data.blogPosts.nodes.forEach((node) => {
    createPage({
      path: `/article/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: { slug: node.frontmatter.slug },
    });
  });

  // Create pages for categories
  result.data.categories.nodes.forEach((node) => {
    createPage({
      path: `/category/${node.frontmatter.category}`,
      component: categoryTemplate,
      context: { category: node.frontmatter.category },
    });
  });

  // Create pages for newsletter posts
  result.data.newsletters.nodes.forEach((node) => {
    createPage({
      path: `/newsletter/${node.frontmatter.slugNew}`,
      component: newsletterPostTemplate,
      context: { slugNew: node.frontmatter.slugNew },
    });
  });
  
};

