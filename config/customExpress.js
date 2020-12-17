const express = require('express') // chama nosso pacote express
const consign = require('consign') //chama nosso consign, agrupa todas nossas rotas e coloca tudo isso dentro no app

    module.exports = () => {
        const app = express() // cria nosso app express

        consign() //chama consign
            .include('controllers') //inclue todos controllers dentro do consign
            .into(app) //aonde? para nosso app.

        return app
    }