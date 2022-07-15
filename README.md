# O que isso faz

Simula o sistema de teclado de um dispositivo NOKIA antigo utilizando tecnologias web.


## VIABILIDADE

Esse projeto é viável uma vez que exercita lógica de programação, demonstra capacidade de criação de software utilizando tecnologias web, é uma exemplificação de integração de front-end com back-end utilizando javascript puro no front-end e typescript no back-end, além de demonstrar quais são as práticas que o desenvolvedor utiliza para criação de aplicações, 

<h2><b>Preparando ambiente</b></h2>

## INSTALAÇÃO
Com o node instalado execute na pasta raiz do projeto seguinte o comando: 
<code>npm install</code>

EXECUTAR
Depois de instalado basta executar na raiz do projeto o comando:
<code>npm start</code>

VER O RESULTADO
Depois de digitar o comando <code>npm start</code> você pode ver o resultado no seu navegador:
abrindo o link: http://localhost:3000

<h2><b>Como usar:</b></h2>
Cada tecla que você pressionar vai ser referente a um grupo de números,
Como desenhado nos botões, após clicar no botão de envio, será exibido um alerta
Com o texto transformado.

<h2><b>Metodologia:</b></h2>
Os números digitados são separados em um array de números.
Esse array é dividido onde cada índice do array tem um código representa uma letra.
Ao acionar o botão de envio, o sistema faz uma requisição para uma api,
que tem uma tabela de decodificação, onde será transformado em texto e devolvido para o front-end,
onde o resultado será exibido para você!
