
exports.up = function(knex) {
    return knex.schema.createTable('local', function (table) {
      table.string('local_id').primary().notNullable();
      table.string('name').notNullable();
      table.string('country').notNullable();
      table.float('price').notNullable();
      table.string('itinerary').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('local');
  };
  