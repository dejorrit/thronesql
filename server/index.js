const express = require('express')
const expressGraphql = require('express-graphql')
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema
const next = require('next')
const dev = process.env.NODE_DEV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

const typeDefs = require('./typeDefs.js')
const resolvers = require('./resolvers.js')

nextApp.prepare().then(() => {
  const app = express()

  // graphql endpoint
  app.use('/graphql', expressGraphql({
    schema: makeExecutableSchema({
      typeDefs,
      resolvers
    }),
    graphiql: true
  }))

  // render nextjs app
  app.get('*', handle)

  app.listen(4000, () => {
    console.log('Running ThronesQL server on http://localhost:4000/graphql ⚔️')
  })
})
