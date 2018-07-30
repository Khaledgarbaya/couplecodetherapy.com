const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const showPagesTemplate = path.resolve(`src/templates/template-show.js`)
    const tagPagesTemplate = path.resolve(`src/templates/template-tag-page.js`)
    graphql(
      `
        {
          allMarkdownRemark(
            limit: 1000
            filter: { frontmatter: { publish: { eq: true } } }
          ) {
            edges {
              node {
                frontmatter {
                  tags
                  slug
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }

      // Create show pages.
      result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
          path: edge.node.frontmatter.slug, // required
          component: slash(showPagesTemplate),
          context: {
            slug: edge.node.frontmatter.slug,
          },
        })
      })

      // Create tag pages.
      let tags = []
      result.data.allMarkdownRemark.edges.forEach(edge => {
        if (_.get(edge, `node.frontmatter.tags`)) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })
      tags = _.uniq(tags)
      tags.forEach(tag => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`
        createPage({
          path: tagPath,
          component: tagPagesTemplate,
          context: {
            tag,
          },
        })
      })

      resolve()
    })
  })
}

