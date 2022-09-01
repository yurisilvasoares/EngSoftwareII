exports.up = function (knex) {
    return knex.schema.createTable("likes", (table) => {
    table.increments();
    table.integer("like").notNullable().unsigned();
    table.integer("usuario_id").notNullable().unsigned();
    table.foreign("usuario_id").references("usuarios.id")
    .onDelete("restrict").onUpdate("cascade");
    table.integer("carro_id").notNullable().unsigned();
    table.foreign("carro_id").references("carros.id")
    .onDelete("restrict").onUpdate("cascade");
    table.timestamps(true, true);
    });
    };
    exports.down = function (knex) {
    return knex.schema.dropTable("likes");
    };