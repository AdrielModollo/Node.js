const conexao = require('./conexao')

/*Quando precisarmos fazer algo com a resposta de uma requisição mas, até que essa resposta retorne, precisamos continuar executando a nossa aplicação.
Promise é uma das formas de trabalhar de forma assíncrona que o Javascript nos proporciona para trabalharmos, principalmente, com requisições.
*/
const executaQuery = (query, parametros = '') => {
    return new Promise ((resolve, reject) => {
    conexao.query(query, parametros, (erros, resultados, campos) 
     =>{
            if(erros) {
                reject(erros)
            } else {
                resolve(resultados)
            }
        })
    })
}