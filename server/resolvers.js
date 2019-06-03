const data = require('./data.js')
const find = require('lodash').find

module.exports = {
  Query: {
    characters: () => data.characters,
    character: (_, args) => find(data.characters, { id: args.id }),
    houses: () => data.houses,
    house: (_, args) => find(data.houses, { id: args.id })
  },

  Character: {
    houses: character => character.house_ids.map(id => find(data.houses, { id })).filter(val => !!val),
    parents: character => character.parent_ids.map(id => find(data.characters, { id })).filter(val => !!val),
    children: character => character.child_ids.map(id => find(data.characters, { id })).filter(val => !!val),
    siblings: character => character.sibling_ids.map(id => find(data.characters, { id })).filter(val => !!val),
    killed: character => character.killed_ids.map(id => find(data.characters, { id })).filter(val => !!val),
    killedBy: character => character.killedBy_ids.map(id => find(data.characters, { id })).filter(val => !!val),
    serves: character => character.serves_ids.map(id => find(data.characters, { id })).filter(val => !!val),
    servedBy: character => character.servedBy_ids.map(id => find(data.characters, { id })).filter(val => !!val)
  },

  House: {
    characters: house => data.characters.filter(character => character.house_ids.indexOf(house.id) !== -1).filter(val => !!val)
  }
}
