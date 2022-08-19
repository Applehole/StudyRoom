import { ApolloServer, gql } from "apollo-server";
//!를 가지고 있으면 null값이 나오지 않는다는 뜻 == 모든 정보에 들어가 있는 값인지 판단하기

const typeDefs = gql`
type User {
    id: ID!
    age: Int!
    name: String!
}

type tweet {
    id:ID!
    text: String!
    creator: User!
}
type Query {
    allTweet:[tweet!]!
    Tweet(id: ID!): tweet
}

type Mutation {
    postTweet(text: String!, userId: ID!): tweet!
    deleteTweet(id:ID!): Boolean!
}

`

const server = new ApolloServer({typeDefs})

server.listen().then(({url})=>{
    console.log(`Running on ${url}`);
})