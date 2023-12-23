exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const workTemplate = require.resolve(`./src/templates/blog-post.js`)
    const res = await graphql(`
        query BlogFindSlug {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
            nodes {
            frontmatter {
                slug
            }
            }
        }
        }
    `)
    res.data.allMarkdownRemark.nodes.forEach((node) => {
        createPage({
        path: `/blog/${node.frontmatter.slug}`,
        component: workTemplate,
        context: { slug: node.frontmatter.slug },
        })
    })
    const catTemplate = require.resolve(`./src/templates/category-template.js`)
    const resa = await graphql(`
        query BlogFindCat {
        allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
            nodes {
            frontmatter {
                category
            }
            }
        }
        }
    `)
    resa.data.allMarkdownRemark.nodes.forEach((node) => {
        createPage({
        path: `/category/${node.frontmatter.category}`,
        component: catTemplate,
        context: { category: node.frontmatter.category },
        })
    })
}
