const express = require('express')
const expressGraphql = require('express-graphql')
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema

const typeDefs = require('./typeDefs.js')
const resolvers = require('./resolvers.js')

// function getCharacters () {
//   return data.characters.map(character => getCharacter({ id: character.id }))
// }

// function getCharacter (args) {
//   const character = data.characters.find(({ id }) => id === args.id)

//   return character ? {
//     ...character,
//     houses: character.house_ids ? character.house_ids.map(id => getHouse({ id })) : [],
//     parents: character.parent_ids ? character.parent_ids.map(id => getSubCharacter({ id })) : [],
//     children: character.child_ids ? character.child_ids.map(id => getSubCharacter({ id })) : [],
//     siblings: character.sibling_ids ? character.sibling_ids.map(id => getSubCharacter({ id })) : [],
//     killed: character.killed_ids ? character.killed_ids.map(id => getSubCharacter({ id })) : [],
//     killedBy: character.killedBy_ids ? character.killedBy_ids.map(id => getSubCharacter({ id })) : [],
//     serves: character.serves_ids ? character.serves_ids.map(id => getSubCharacter({ id })) : [],
//     servedBy: character.servedBy_ids ? character.servedBy_ids.map(id => getSubCharacter({ id })) : [],
//     marriedOrEngagedWith: character.marriedOrEngagedWith_ids ? character.marriedOrEngagedWith_ids.map(id => getSubCharacter({ id })) : []
//   } : null
// }

// function getSubCharacter (args) {
//   const character = data.characters.find(({ id }) => id === args.id)

//   return character ? {
//     ...character
//   } : null
// }

// function getHouses () {
//   return data.houses
// }

// function getHouse (args) {
//   return data.houses.find(({ id }) => id === args.id)
// }

// const root = {
//   characters: getCharacters,
//   character: getCharacter,
//   houses: getHouses,
//   house: getHouse
// }

const app = express()
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
