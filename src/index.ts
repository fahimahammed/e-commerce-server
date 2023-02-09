import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {products, hello} from './db.js';

console.log(hello);

const typeDefs = `#graphql
  
  type Query {
    products: [Product]
    hello: String
  }

  type Product{
    id: ID
    name: String
    description: String
    quantity: Int
    price: Float
    image: String
    onSale: Boolean
    catagoryId: ID
  }
`;

  const resolvers = {
    Query: {
      products: () =>products,
      hello: ()=> "Hello, GraphQL"
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);

