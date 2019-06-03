const data = require('./data.js')
const find = require('lodash').find

module.exports = {
  Query: {
    characters: () => data.characters,
    character: (_, args) => find(data.characters, { id: args.id })
  },

  Character: {
    parents: character => character.parent_ids.map(id => find(data.characters, { id })).filter(val => !!val),
    children: character => character.child_ids.map(id => find(data.characters, { id })).filter(val => !!val),
    siblings: character => character.sibling_ids.map(id => find(data.characters, { id })).filter(val => !!val),
    killed: character => character.killed_ids.map(id => find(data.characters, { id })).filter(val => !!val),
    killedBy: character => character.killedBy_ids.map(id => find(data.characters, { id })).filter(val => !!val),
    serves: character => character.serves_ids.map(id => find(data.characters, { id })).filter(val => !!val),
    servedBy: character => character.servedBy_ids.map(id => find(data.characters, { id })).filter(val => !!val)
  }
}
