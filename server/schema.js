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
    nickname: String
    isRoyal: Boolean!
    houses: [House]
    parents: [SubCharacter]
    children: [SubCharacter]
    siblings: [SubCharacter]
    killed: [SubCharacter]
    killedBy: [SubCharacter]
    marriedOrEngagedWith: [SubCharacter]
  },
  type SubCharacter {
    id: ID!
    name: String!
  }
  type House {
    id: ID!
    name: String!
  }
`)

module.exports = schema
