const fs = require('fs')

fs.createReadStream('./assets/EventLoop.png',)
    .pipe(fs.createWriteStream('./assets/EventLoop-stream.png'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))

/*
 buffer não é muito indicado, até pela documentação oficial, porque da forma como estamos fazendo, ele será lido de 
 forma síncrona. Assim, toda a imagem será lida antes que o programa execute o que queremos.
Há outra forma de fazer o mesmo procedimento, mais indicado pela documentação do Node, que usaremos no nosso curso. 
Ao invés de trabalhar com a forma síncrona, utilizando buffers, vamos utilizar Streams.
Uma stream fará uma ação, como subir ou salvar uma imagem, conforme isso for necessário, de forma paralela. 
Não precisaremos parar de executar processos para que essa ação aconteça.
É um conceito parecido com o de stream de vídeos, por exemplo, que ouvimos muito falar hoje em dia.
*/

/* SINCRONO 

Esse será o funcionamento básico do EventLoop do Javascript. Então, a primeira coisa importante para lembrar é que 
o Javascript não é exatamente Single Thread, mas também não tem múltiplas threads. Ainda assim, há a possibilidade
 de executar alguns eventos assíncronos, executando os síncronos, primeiramente.

Só de conseguir diferenciar esses processos, já conseguimos entender, por exemplo, por que quando executamos um
 evento com um setTimeout() de 0 segundos (ou seja,que teoricamente não demoraria nenhum tempo de execução), ele
 só será executado após o que for síncrono.
*/