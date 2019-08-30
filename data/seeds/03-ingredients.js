
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { name: 'pan' },
    { name: 'pot' },
    { name: 'oil' },
    { name: 'milk' },
    { name: 'butter' },
    { name: 'eggs' },
    { name: 'salt' },
    { name: 'water' },
    { name: 'mac & cheese' },
    { name: 'potato' }
  ]);
};
