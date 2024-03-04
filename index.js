const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const MONGODB = "mongodb+srv://roydev:149808Roy@cluster0.echrpxh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Apollo Server
// TypeDefs: GraphQL Type Definitions
// Resolvers: How do we resolve queries / mutations

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: 5000 });
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB or starting server:', error.message);
    });
