exports.up = function (knex) {

    return knex.schema.createTable("carros", (table) => {

        table.increments();

        table.integer("carro_id",).notNullable();

        table.string("modelo", 80).notNullable();

        table.string("foto").notNullable();

        table.integer("ano", 4).notNullable();

        table.decimal("preco", 9.2).notNullable();

        table.boolean("destaque").notNullable().defaultTo(false);

        table.integer("usuario_id").notNullable().unsigned();

        table.integer('n_likes').notNull().defaultTo(0);

        table.integer('n_dislikes').notNull().defaultTo(0);

        table.foreign("usuario_id").references("usuarios.id")

            .onDelete("restrict").onUpdate("cascade");

        table.integer("marca_id").notNullable().unsigned();

        table.foreign("marca_id").references("marcas.id")

            .onDelete("restrict").onUpdate("cascade");


    });

};



exports.down = function (knex) {

    return knex.schema.dropTable("carros");

};












