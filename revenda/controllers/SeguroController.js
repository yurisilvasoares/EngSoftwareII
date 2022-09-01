const dbKnex = require("../data/db_config");  // dados de conexão com o banco de dados

module.exports = {

   // async index(req, res) {
     //   try {
       //     const seguro = await dbKnex("seguro");
         //   res.status(200).json(seguro);
       //     res.status(200).json(seguro);
      //  } catch (error) {
       //     res.status(400).json({ msg: error.message }); // retorna status de erro e msg
       // }

 //},

        async index(req, res) {
            try {
                // para obter os seguro pode-se utilizar .select().orderBy() ou apenas .orderBy()
                //            const carros = await dbKnex("carros");
    
                const seguro = await dbKnex("seguro as s")
                    .select(
                        "s.id",
                        "cli_nome",
                        "cli_telefone",
                        "cidade",
                        "UF",
                        "envolvidos",
                        "c.modelo as carro"
                    )

                    .innerJoin('carros as c', 'carro_id',  'c.id')
                    
                res.status(200).json(seguro); // retorna statusCode ok e os dados
            } catch (error) {
                res.status(400).json({ msg: error.message }); // retorna status de erro e msg
            }


 }

}