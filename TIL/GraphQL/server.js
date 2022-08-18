import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
type User {
    id: ID
    age: Int
    name: String
}

type tweet {
    id:ID
    text: String
    creator: User
}
type Query {
    allTweet:[tweet]
    Tweet: tweet
}
`

const server = new ApolloServer({typeDefs})

server.listen().then(({url})=>{
    console.log(`Running on ${url}`);
})