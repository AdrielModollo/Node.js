const fs = require('fs')

fs.readFile('../assets/natureza2.jpg', (erro, buffer) => { 
    console.log('imagem foi bufferizada')

    fs.writeFile('./assets/natureza2.jpg', buffer, erro => { 
        console.log('imagem foi escrita')
    })
})