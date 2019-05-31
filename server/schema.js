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
    parents: [RelatedCharacter]
    children: [RelatedCharacter]
    siblings: [RelatedCharacter]
    marriedOrEngagedWith: [RelatedCharacter]
    killed: [RelatedCharacter]
    killedBy: [RelatedCharacter]
    serves: [RelatedCharacter]
    servedBy: [RelatedCharacter]
  },
  type RelatedCharacter {
    id: ID!
    name: String!
  }
  type House {
    id: ID!
    name: String!
  }
`)

module.exports = schema
