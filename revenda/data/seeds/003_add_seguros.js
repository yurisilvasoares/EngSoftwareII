exports.seed = async function(knex) {

  // Deletes ALL existing entries

  await knex('seguro').del()

  await knex('seguro').insert([

    {cli_nome: 'Jonas', cli_telefone: "3218-2942", UF: "RS", cidade: "Pelotas", carro_id: 1 },

    {cli_nome: 'Fernando', cli_telefone: "3291-2392", UF: "SC", cidade: "Tubarão", carro_id: 2 },

    {cli_nome: 'Gladimau', cli_telefone: "3271-7466", UF: "PR", cidade: "Cascavel", carro_id: 1 }

  ]);

};