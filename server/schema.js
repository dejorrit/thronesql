const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    characters: [Character]
    character(id: ID!): Character
    houses: [House!]
    house(id: ID!): House
  },
  type Character {
    id: ID!
    name: String!
    isRoyal: Boolean!
    isKilled: Boolean!
    houses: [House!]
    parents: [Character!]
    children: [Character!]
    siblings: [Character!]
    killedBy: [Character!]
  },
  type House {
    id: ID!
    name: String!
  }
`)

module.exports = schema
