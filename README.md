"# Node.js" 

Como funciona o node?
O Node. js é um ambiente de execução na porta 80 padrão,baseado na pilha da web aberta (HTML, CSS e JS). Ou seja, é uma plataforma em que é possível criar 
aplicações Javascript sem depender de um browser para a execução. Sua execução em single-thread não exige resposta a cada requisição.

Quando utilizar o node? 
APIs;
Aplicações web real-time como servidores de chat ou aplicações colaborativas entre múltiplos usuários;
Jogos multiplayer;
Aplicações que demandam alta escabilidade;
Servidores de streaming de dados;

O que é NPM?
O NPM, ou Node Package Manager, é um repositório online com a finalidade de publicação de projetos NodeJS de código aberto. 
Podemos utilizar o npm como um utilitário de linhas de comando, interagindo com os repositórios e instalando os seus pacotes
npm -v <-Verifica existência da ferramenta que auxilia na implatação de bibliotecas.


node -v <-Verifica existência do node instalado.
npm -v 
npm init <- Inicilializa nosso projeto
npm install express <- Instala nosso pacote com frameworks

node index.js <- executa nosso app node.js, chamando nosso arquivo index.js

npm install --save-dev nodemon <- instala biblioteca para reiniciar nosso servidor automático

package.json <-Contém todas informações de nosso projeto

Dentro de package.json o comando "start": "node index.js", <- padronizado a inicialização do nosso node