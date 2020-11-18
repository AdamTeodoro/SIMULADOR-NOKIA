<h2><b>O que isso faz:</b></h2>

Simula o sistema de teclado de um dispositivo NOKIA "tijolão".

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
