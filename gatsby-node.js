/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const projects = [
    {
      id: 1,
      name: 'POA',
      title: 'Plant Operations Advisor',
      imgUrl: '/images/Excursion-Layout.jpg',
      description: 'TODO'
    },
    {
      id: 2,
      name: 'TravelPack',
      title: 'TravelPack',
      imgUrl: '/images/travelpack.jpeg',
      description: 'TODO'
    }
  ]

  projects.forEach(project => {
    const node = {
      name: project.name,
      title: project.title,
      id: createNodeId(project.id),
      imgUrl: project.imgUrl
    }
    actions.createNode(node)
  })
}