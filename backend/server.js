const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const EnhancedRedis = require('./enhancedRedis')
const typeDefs = require('./schemas')
const resolvers = require('./resolvers')

const port = 4000
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  persistedQueries: {
    cache: new EnhancedRedis()
  }
})

server.applyMiddleware({ app })

app.listen(port, () => console.log(`listening on port: ${port}`))
