const Atendimento = require('../models/atendimentos')

module.exports = app => { 
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando um get'))//Passa o caminho da rota que será executado
    // '/' <- caminho ou rota ||||||| req <- faz a requisão |||||| res <- responde a requisição
    
    app.post('/atendimentos', (req, res) => { 
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)

    })
}//função que exporta nosso app