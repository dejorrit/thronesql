const express = require('express')
const expressGraphql = require('express-graphql')
const schema = require('./schema.js')
const data = require('./data.js')

function getCharacter (args) {
  return data.characters.filter(character => {
    return character.id === args.id
  })[0]
}

function getCharacters () {
  return data.characters
}

const root = {
  character: getCharacter,
  characters: getCharacters
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
