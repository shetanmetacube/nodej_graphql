const { ApolloServer } =  require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer')
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {},
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

(async function(){
  await server.start();
  
  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server)
  );
  
  (async()=>{await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))})();
  console.log(`🚀 Server ready at http://localhost:4000`);
})();

 
