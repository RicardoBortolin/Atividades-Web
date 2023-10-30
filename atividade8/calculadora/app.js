const express = require('express');
const app = express();
const port = 3000;

const calculatorRoutes = require('./atividade8/routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', calculatorRoutes);

app.listen(port, () => {
  console.log(`Aplicativo rodando em http://localhost:${port}`);
});
