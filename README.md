# Node.js 

Como funciona o node?
O Node. js é um ambiente de execução na porta 80 padrão,baseado na pilha da web aberta (HTML, CSS e JS). Ou seja, é uma plataforma em que é possível criar 
aplicações Javascript sem depender de um browser para a execução. Sua execução em single-thread não exige resposta a cada requisição.

Quando utilizar o node? 
APIs;
Aplicações web real-time como servidores de chat ou aplicações colaborativas entre múltiplos usuários;
Jogos multiplayer;
Aplicações que demandam alta escabilidade;
Servidores de streaming de dados;

Qual a diferença entre comunicação assíncrona e síncrona?
https://pt.stackoverflow.com/questions/51268/qual-a-diferença-entre-comunicação-assíncrona-e-síncrona#:~:text=As%20comunicações%20Síncrona%20e%20Assíncrona,tem%20suas%20vantagens%20e%20desvantagens.&text=Imaginemos%20que%20um%20emissor%20está,cada%20bola%20com%20uma%20letra.

# Bibliotecas
O que é NPM?
O NPM, ou Node Package Manager, é um repositório online com a finalidade de publicação de projetos NodeJS de código aberto. 
Podemos utilizar o npm como um utilitário de linhas de comando, interagindo com os repositórios e instalando os seus pacotes

npm -v <-Verifica existência da ferramenta que auxilia na implatação de bibliotecas.


node -v <-Verifica existência do node instalado.
npm -v 
npm init <- Inicilializa nosso projeto
npm install express <- Instala nosso pacote com frameworks

node index.js <- executa nosso app node.js, chamando nosso arquivo index.js

Dentro de package.json o comando "start": "node index.js", <- padronizado a inicialização do nosso node
npm install --save-dev nodemon <- instala biblioteca para reiniciar nosso servidor automático

package.json <-Contém todas informações de nosso projeto

npm install consign <- Agrupa todas nossas rotas e coloca tudo isso dentro no app

npm install body-parser <- Comanda para instalar body-parser para conseguir ler os dados que estamos recebendo no body.

npm install mysql <- Instala biblioteca do banco de dados

npm install moment <- Instala uma biblioteca que faz a tratativa de datas

npm install -- save axios <-Faz algumas requisições

Esse site possuí todos os status de HTTPS e seus respectivos códigos: https://httpstatuses.com


# Teste

npm start

Utilizado Insominia Designer para teste, tipo JSON:

Tipo: POST

Local: localhost:3000/pet

Comado:
{
    "nome": "Harry",
    "imagem": "./assets/EventLoop.png"
}


# Teste2

Utilizado Insominia Designer para teste, tipo JSON:

Tipo: POST

Local: localhost:3000/atendimentos

Comado:

{
    "cliente": "10020030020",
    "pet": "Harry",
    "servico": "tosa",
    "observacoes": "idoso",
    "data": "25/02/2022",
	"dataCriacao": "24/02/2022"
}
