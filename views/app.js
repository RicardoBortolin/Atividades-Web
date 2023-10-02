const express = require('express');
const app = express();
const port = 3000; 

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index');
});


app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, dataAgendamento } = req.body;
  const dados = { nome, endereco, telefone, dataAgendamento };
  res.render('dados', { dados });
});

app.listen(port, () => {
  console.log(`Servidor rodando em 'C:\Users\Admin\atividade6\app.js`);
});
