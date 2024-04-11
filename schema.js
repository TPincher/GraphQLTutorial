export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
}

type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
}

type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
}

type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
}

type Mutation {
    addGame (game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, edits: EditGameInput): Game
}

# An 'input' is saying to GraphQL that this is a group of several fields that belong as one type, which can then be used as an argument itself.
input AddGameInput {
    title: String!,
    platform: [String!]!
}

input EditGameInput {
    title: String,
    platform: [String!]
}
`;

// int, float, string, boolean, ID are the built-in types for GraphQL
