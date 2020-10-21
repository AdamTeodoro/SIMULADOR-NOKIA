O que isso faz:

Simula o teclado de um dispositivo NOKIA "tijolão".

Como usar:
Cada tecla que você pressionar vai ser referente a um grupo de números,
Como desenhado nos botões, após clicar no botão de envio, será exibido um alerta
Com o texto transformado.

Metodologia:
Os números digitados são separados em um array de números.
Esse array é dividido onde cada índice do array tem um código referente
A uma letra, ao acionar o botão de envio, o sistema faz uma requisição para uma api
Que tem uma tabela de decodificação, onde será transformado em texto e devolvido para o front-end
Que vai alertar o resultado para você!
