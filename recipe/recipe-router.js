const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'There was a problem getting the recipes' });
    })
});

router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(recipe => {
        console.log(recipe);
        res.status(200).json(recipe);
    })
    .catch(err => {
        res.status(500).json({ message: 'There was an error getting the recipe', error: err });
    })
});

router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
  .then(steps => {
    res.status(200).json(steps);
  })
  .catch(err => {
      res.status(500).json({ message: 'There was an error getting the instructions', error: err });
  })
});

module.exports = router;