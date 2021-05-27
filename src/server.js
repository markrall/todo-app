import {createServer} from 'miragejs'
import {createGraphQLHandler} from '@miragejs/graphql'
import graphQLSchema from './graphql-schema'

createServer({
  routes() {
    this.post('/graphql', createGraphQLHandler(graphQLSchema, this.schema))
  },

  seeds(server) {
    server.create('Movie', {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
    })
    server.create('Movie', {
      title: 'The Lord of the Rings: The Two Towers',
    })
    server.create('Movie', {
      title: 'The Lord of the Rings: The Return of the King',
    })
  },
})
