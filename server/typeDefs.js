
const typeDefs = `
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
    parents: [Character]
    children: [Character]
    siblings: [Character]
    marriedOrEngagedWith: [Character]
    killed: [Character]
    killedBy: [Character]
    serves: [Character]
    servedBy: [Character]
  },
  type House {
    id: ID!
    name: String!
  }
`

module.exports = typeDefs
