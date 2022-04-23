
exports.up = function(knex) {
  return knex.schema
    .createTable('expense_group', function (table) {
      table.increments('expense_groupID');
      table.string('exp_group_name');
      table.string('note');
      table.integer('exp_group_icon');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('expense_group')
};
