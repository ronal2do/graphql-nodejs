import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql';
import './db';

const app_port = 4000;
const graphQLServer = new express();

graphQLServer
  .use('/graphql', graphqlHTTP({ 
  	schema: schema, 
  	pretty: true,
  	graphiql: true }))
  .listen(app_port, () => {
  	console.log('Listening at port', app_port);
});

