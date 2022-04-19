
exports.up = function(knex) {
  return knex.schema
    .createTable('customer', function (table) {
      table.increments('customerID');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('customer')
};
