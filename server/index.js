const express = require('express')
const expressGraphql = require('express-graphql')
const schema = require('./schema.js')
const data = require('./data.js')

function getCharacters () {
  return data.characters.map(character => ({
    ...character,
    houses: character.house_ids ? character.house_ids.map(id => getHouse({ id })) : []
  }))
}

function getCharacter (args) {
  return getCharacters().find(({ id }) => id === args.id)
}

function getHouses () {
  return data.houses
}

function getHouse (args) {
  return getHouses().find(({ id }) => id === args.id)
}

const root = {
  characters: getCharacters,
  character: getCharacter,
  houses: getHouses,
  house: getHouse
}

const app = express()
app.use('/graphql', expressGraphql({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Running ThronesQL server on http://localhost:4000/graphql ⚔️')
})
