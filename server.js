const express = require('express');
const helmet = require('helmet');

const RecipesRouter = require('./recipe/recipe-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', RecipesRouter)

server.get('/', (req, res) => {
    res.status(200).json("You've reached the API root.");
});

module.exports = server;
