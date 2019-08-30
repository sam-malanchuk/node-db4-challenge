
exports.seed = function(knex) {
  return knex('recipes').insert([
    { name: 'Fried Eggs' },
    { name: 'Mashed Potatoes' },
    { name: 'Mac & Cheese' }
  ]);
};
