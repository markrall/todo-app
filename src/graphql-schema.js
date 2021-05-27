const graphQLSchema = `
  input MovieInput {
    title: String
  }

  type Movie {
    id: ID!
    title: String!
  }

  type Mutation {
    createMovie(input: MovieInput!): Movie
    deleteMovie(id: ID!): Movie
    updateMovie(id: ID!, input: MovieInput!): Movie
  }

  type Query {
    movies(title: String): [Movie]
    movie(id: ID, title: String): Movie
  }
`

export default graphQLSchema
