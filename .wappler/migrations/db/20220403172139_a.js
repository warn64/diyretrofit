
exports.up = function(knex) {
  return knex.schema
    .table('customer', function (table) {
      table.string('firstname');
      table.string('lastname');
      table.string('shopname');
      table.string('group');
      table.string('email');
      table.string('password');
      table.string('phone');
      table.integer('address');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('customer', function (table) {
      table.dropColumn('firstname');
      table.dropColumn('lastname');
      table.dropColumn('shopname');
      table.dropColumn('group');
      table.dropColumn('email');
      table.dropColumn('password');
      table.dropColumn('phone');
      table.dropColumn('address');
    })
};
