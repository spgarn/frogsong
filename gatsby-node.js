const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data:post } = await graphql(`
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

    post.allContentfulNews.edges.forEach(edge => {
        actions.createPage({
            path: '/news/' + edge.node.slug,
            component: path.resolve('./src/templates/DetailViewPost.js'),
            context: { slug: edge.node.slug }
        })
    })

    const { data:game } = await graphql(`
    query projects {
      allContentfulProjects {
          edges {
            node {
              title,
              id,
              infoText,
              slug,
              createdAt,
              isOwnIp,
              slug
            }
          }
        }
      }
    `)

    game.allContentfulProjects.edges.forEach(edge => {
      console.log(edge)
      actions.createPage({
          path: edge.node.isOwnIp ? '/originalips/' + edge.node.slug : '/portfolio/' + edge.node.slug,
          component: path.resolve('./src/templates/DetailViewGame.js'),
          context: { slug: edge.node.slug }
      })
  })

}