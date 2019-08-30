const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db.select('i.name', 'r.quantity').from('recipe_ingredients as r')
    .join('ingredients as i', 'r.ingredients_id', 'i.id')
    .where({'r.recipe_id': recipe_id});
}

function getInstructions(recipe_id) {
    return db.select('step_number', 'content').from('steps').where({recipe_id}).orderBy('step_number', 'asc');
}