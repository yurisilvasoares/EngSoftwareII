const express = require("express");
const routes = express.Router();

const UsuarioController = require("./controllers/UsuarioController");
const MarcaController = require("./controllers/MarcaController");
const CarroController = require("./controllers/CarroController");

const login = require("./middlewares/login");
const SeguroController = require("./controllers/SeguroController");

routes.get("/usuarios", UsuarioController.index)
      .post("/usuarios",UsuarioController.store)
      .post("/login", UsuarioController.login)
      .get("/senhas",UsuarioController.senhas);

routes.get("/marcas", MarcaController.index)
      .post("/marcas", MarcaController.store);

routes.get("/carros", CarroController.index)
      .post("/carros", CarroController.store)
      .put("/carros/:id", CarroController.update)
      .delete("/carros/:id", CarroController.destroy)

      .put("/carros/destaque/:id", CarroController.destaque)
      .get("/carros/destaques", CarroController.destaques)

      .put("/carros/reajuste/:taxa/:marca_id?", CarroController.updateValue)

      .get("/carros/filtro/:palavra", CarroController.search)
      .get("/carros/filtro-preco", CarroController.filter)

      .get("/carros/marcas-num", CarroController.groupMarcas)
      .get("/carros/anos-cad", CarroController.groupDataCad)

      .get("/carros/:id", CarroController.show)


routes.get("/seguro", SeguroController.index) ;

module.exports = routes;