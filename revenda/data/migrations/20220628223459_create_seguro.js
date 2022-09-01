exports.up = function (knex) {

    return knex.schema.createTable("seguro", (table) => {

        table.increments();

        table.string("cli_nome", 80).notNullable();

        table.string("cli_telefone", 15).notNullable();

        table.string("UF",2).notNullable();

        table.string("cidade", 20).notNullable();

        table.boolean("envolvidos").notNullable().defaultTo(false);
        
        

        table.integer("carro_id").notNullable().unsigned();

        table.foreign("carro_id").references("carros.id")

            .onDelete("restrict").onUpdate("cascade");

        table.timestamps(true,true);
        
        
    });

};



exports.down = function (knex) {

    return knex.schema.dropTable("seguro");

};












