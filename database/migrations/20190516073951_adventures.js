exports.up = function(knex, Promise) {
  knex.schema.createTable("adventures", tbl => {
    tbl.increments();

    tbl.string("name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("adventures");
};
