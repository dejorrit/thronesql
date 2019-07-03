const express = require('express')
const expressGraphql = require('express-graphql')
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema

const typeDefs = require('./typeDefs.js')
const resolvers = require('./resolvers.js')

const app = express()

// graphql endpoint
app.use('/graphql', expressGraphql({
  schema: makeExecutableSchema({
    typeDefs,
    resolvers
  }),
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Running ThronesQL server on http://localhost:4000/graphql ⚔️')
})
