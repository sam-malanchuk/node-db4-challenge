const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
//   res.status(200).json('You reached the recipes endpoint')
  Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'There was a problem getting the recipes' });
    })
});

module.exports = router;