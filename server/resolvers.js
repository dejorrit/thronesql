const data = require('./data.js')
const find = require('lodash').find

module.exports = {
  Query: {
    characters: () => data.characters,
    character: (_, args) => find(data.characters, args),
    houses: () => data.houses,
    house: (_, args) => find(data.houses, { id: args.id })
  },

  Character: {
    houses: character => character.house_ids.map(id => find(data.houses, { id })).filter(val => !!val),
    parents: character => findCharactersByAttribute('parent_ids', character),
    children: character => findCharactersByAttribute('child_ids', character),
    siblings: character => findCharactersByAttribute('sibling_ids', character),
    killed: character => findCharactersByAttribute('killed_ids', character),
    killedBy: character => findCharactersByAttribute('killedBy_ids', character),
    serves: character => findCharactersByAttribute('serves_ids', character),
    servedBy: character => findCharactersByAttribute('servedBy_ids', character),
    marriedOrEngagedWith: character => findCharactersByAttribute('marriedOrEngagedWith_ids', character)
  },

  House: {
    characters: house => data.characters.filter(character => character.house_ids.indexOf(house.id) !== -1).filter(val => !!val)
  }
}

function findCharactersByAttribute (attribute, character) {
  return character[attribute].map(id => find(data.characters, { id })).filter(val => !!val)
}
