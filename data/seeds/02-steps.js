
exports.seed = function(knex) {
  return knex('steps').insert([
    { step_number: 1, content: 'Put a frying pan on the stove', recipe_id: 1 },
    { step_number: 2, content: 'Pour some oil in the pan', recipe_id: 1 },
    { step_number: 3, content: 'Turn on the stove on around 5-6', recipe_id: 1 },
    { step_number: 4, content: 'Crack an egg into the pan', recipe_id: 1 },
    { step_number: 5, content: 'Sprinkle some salt on the egg', recipe_id: 1 },
    { step_number: 6, content: 'Let it fry for about 5 minutes slowly turning down the strength on the stove', recipe_id: 1 },
    { step_number: 1, content: 'Peal some potatoes', recipe_id: 2 },
    { step_number: 2, content: 'Cut them into small slices', recipe_id: 2 },
    { step_number: 3, content: 'Place into a pan of water on the stove on about 6-7', recipe_id: 2 },
    { step_number: 4, content: 'Sprinkle a bit of salt in the boiling water', recipe_id: 2 },
    { step_number: 5, content: 'Pour out the water after about 15 minutes', recipe_id: 2 },
    { step_number: 6, content: 'Add some milk and/or butter and smash it up', recipe_id: 2 },
    { step_number: 1, content: 'Put a pot of water to boil on the stove', recipe_id: 3 },
    { step_number: 2, content: 'Empty a pack of Mac & Cheese into it', recipe_id: 3 },
    { step_number: 3, content: 'Let it boil for 10-15 minutes and then drain the water', recipe_id: 3 },
    { step_number: 4, content: 'Add in the cheese packet and stir it up', recipe_id: 3 },
  ]);
};
