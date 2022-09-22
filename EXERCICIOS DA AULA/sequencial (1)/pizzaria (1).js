const prompt = require("prompt-sync") ()

const pizzaria = Number(prompt('Total da conta: '))
const cliente = prompt('N° de clientes: ')
const calculo = pizzaria/cliente
console.log (`O Valor dividido entre ${cliente} pessoas, ficará no valor de R$ ${calculo} para cada um`)