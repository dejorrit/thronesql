# ThronesQL

Game of Thrones GraphQL mock server

## Install

`yarn install`

## Run

`yarn start`

## Yay!

Your ThronesQL server should now be running on http://localhost:4000/graphql. You should see the GraphiQL interface there.

## Types

```graphql
type Character {
  id: ID!
  name: String!
  nickname: String
  isRoyal: Boolean!
  houses: [House]
  parents: [Character]
  children: [Character]
  siblings: [Character]
  killed: [Character]
  killedBy: [Character]
  serves: [Character]
  servedBy: [Character]
  marriedOrEngagedWith: [Character]
}

type House {
  id: ID!
  name: String!
  characters: [Character]
}
```

## Example queries

### Get all characters

```graphql
query characters {
  characters {
    id
    name
  }
}
```

### Who got killed by Arya?

```graphql
query character {
  character(id: "ebae1db5-930a-44c5-b1da-ec89244adbf9") {
    killed {
      name
    }
  }
}
```

## Nothing is perfect

This ThronesQL server is a far from perfect experiment and still in progress. If you'd like to contribute: please do so!

## Thanks

A big thank you to Jeffrey Lancaster and his [Game of Thrones datasets](https://github.com/jeffreylancaster/game-of-thrones)

