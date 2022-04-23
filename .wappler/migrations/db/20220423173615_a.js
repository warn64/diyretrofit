
exports.up = function(knex) {
  return knex.schema
    .dropTable('expense_group')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('expense_group', function (table) {
      table.increments('expense_groupID').primary().notNullable();
      table.integer('expenseID').unsigned();
      table.foreign('expenseID').references('expenseID').inTable('expense').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('expense_group_name', 255);
      table.string('note', 255);
    })
};
