# ThronesQL

Game of Thrones GraphQL mock server

## Install

`yarn install`

## Run

`yarn start`

## Yay!

Your ThronesQL server should now be running on http://localhost:4000/graphql. You should see the GraphiQL interface there.

## Examples

You can query characters and houses. Try querying Arya Stark like this:

```graphql
query character {
  character(id: "ebae1db5-930a-44c5-b1da-ec89244adbf9") {
    id
    name
    isRoyal
    houses {
      name
    }
    parents {
      name
    }
    siblings {
      name
    }
    killed {
      name
    }
    killedBy {
      name
    }
    serves {
      name
    }
    servedBy {
      name
    }
    marriedOrEngagedWith {
      name
    }
  }
}
```
