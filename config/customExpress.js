const express = require('express') // chama nosso pacote express
const consign = require('consign') //chama nosso consign, agrupa todas nossas rotas e coloca tudo isso dentro no app
const bodyParser = require('body-parser') // Usamos body-parser para conseguir ler os dados que estamos recebendo no body.

    module.exports = () => {
        const app = express() // cria nosso app express

        app.use(bodyParser.urlencoded({extended: true})) //utiliza minha biblioteca body-parser
        app.use(bodyParser.json()) // para arquivos com extensão.json

        consign() //chama consign
            .include('controllers') //inclue todos controllers dentro do consign
            .into(app) //aonde? para nosso app.

        return app
    }