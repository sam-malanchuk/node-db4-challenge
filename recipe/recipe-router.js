const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json('You reached the recipes endpoint')
});

module.exports = router;