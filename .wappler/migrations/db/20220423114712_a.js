
exports.up = function(knex) {
  return knex.schema
    .createTable('expense', function (table) {
      table.increments('expenseid');
      table.integer('expense_group');
      table.date('date').defaultTo(knex.fn.now());
      table.float('expense_amount');
      table.text('expense_note');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('expense')
};
