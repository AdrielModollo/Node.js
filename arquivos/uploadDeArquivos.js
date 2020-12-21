const fs = require('fs')

fs.createReadStream('./assets/natureza.jpg',)
    .pipe(fs.createWriteStream('./assets/natureza-stream.jpg'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))

/*
 buffer não é muito indicado, até pela documentação oficial, porque da forma como estamos fazendo, ele será lido de 
 orma síncrona. Acdssim, toda a imagem será lida antes que o programa execute o que queremos.
Há outra forma de fazer o mesmo procedimento, mais indicado pela documentação do Node, que usaremos no nosso curso. 
Ao invés de trabalhar com a forma síncrona, utilizando buffers, vamos utilizar Streams.
Uma stream fará uma ação, como subir ou salvar uma imagem, conforme isso for necessário, de forma paralela. 
Não precisaremos parar de executar processos para que essa ação aconteça.
É um conceito parecido com o de stream de vídeos, por exemplo, que ouvimos muito falar hoje em dia.
*/