const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')

const routes = require("./routes");
 

// middleware para aceitar dados em JSON
app.use(express.json());

app.use(routes);

app.get('/', (req, res) => {
res.send('Programação Web. Revenda de Veículos')
})

app.listen(port, () => {
console.log(`Servidor em execução na porta: ${port}`)
})
