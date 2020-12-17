module.exports = app => { 
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos'))//Passa o caminho da rota que será executado
    // '/' <- caminho ou rota ||||||| req <- faz a requisão |||||| res <- responde a requisição
} //função que exporta nosso app