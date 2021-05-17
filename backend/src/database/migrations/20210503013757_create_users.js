const knex = require('knex');
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table){
        table.string('id').primary;
        table.string('name').notNullable();
        table.string('curse');
        table.datetime('created_at', { precision: 6});
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
