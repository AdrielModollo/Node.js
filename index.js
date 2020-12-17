const customExpress = require('./config/customExpress') // importa nossas config dentro do customExpress

const app = customExpress() //nosso app é igual à execução da nossa config customExpress

app.listen(3000, () => console.log('servidor rodando na porta 3000'))//Porta onde vai receber a requisição do app



