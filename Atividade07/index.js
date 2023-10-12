const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/dados', (req, res) => {

    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const nasc = req.body.nasc;
    const endereco = req.body.endereco;
    const uf = req.body.uf;
    const cep = req.body.cep;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const especialidade = req.body.especialidade;
    const data = req.body.data;
    const hora = req.body.hora;
    const alergia = req.body.alergia;
    const info = req.body.info;

    res.render('dados', {
        nome,
        cpf,
        nasc,
        endereco,
        uf,
        cep,
        email,
        telefone,
        especialidade,
        data,
        hora,
        alergia,
        info
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});