
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().unique();
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step_number').notNullable();
        tbl.string('content', 128).notNullable();
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().unique()
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes');
        tbl.integer('ingredients_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients');
        tbl.integer('quantity').notNullable();
        tbl.primary(['recipe_id', 'ingredients_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes');
};
