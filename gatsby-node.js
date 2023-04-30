const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
    query blogPosts {
        allContentfulBlogPosts {
          edges {
            node {
              title,
              id,
              shortText,
              slug,
              createdAt
            }
          }
        }
      }
    `)

    data.allContentfulBlogPosts.edges.forEach(edge => {
        actions.createPage({
            path: '/posts/' + edge.node.slug,
            component: path.resolve('./src/templates/postDetailView.js'),
            context: { slug: edge.node.slug }
        })
    })

}