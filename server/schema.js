const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    character(id: Int!): Character
    characters: [Character]
  },
  type Character {
    id: ID!
    name: String!
  }
`)

module.exports = schema
