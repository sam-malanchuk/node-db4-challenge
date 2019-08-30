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
  return db.select('r.quantity').from('recipe_ingredients as r')
    // .select('r.id', 'r.name', 'ri_quantity')
    // .from('recipes as r')
    // .join('recipe_ingredients as ri', 'r.id', 'ri.recipes_id')
    .join('ingredients as i', 'i.ingredients_id', 'r.id')
    .where({'r.recipe_id': recipe_id});
}

function getInstructions(recipe_id) {
    return db('steps').where({recipe_id}).orderBy('step_number', 'asc');
}