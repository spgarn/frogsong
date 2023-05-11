const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
    query blogPosts {
        allContentfulNews {
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

    data.allContentfulNews.edges.forEach(edge => {
        actions.createPage({
            path: '/news/' + edge.node.slug,
            component: path.resolve('./src/templates/postDetailView.js'),
            context: { slug: edge.node.slug }
        })
    })

}