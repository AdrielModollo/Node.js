const express = require('express') // chama nosso pacote express

const app = express() // cria nosso app express

app.listen(3000, () => console.log('Servidor rodando na porta 3000')) //Porta onde vai receber a requisição do app

app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos')) //Passa o caminho da rota que será executado
// '/' <- caminho ou rota ||||||| req <- faz a requisão |||||| res <- responde a requisição