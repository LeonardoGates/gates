const prompt = require("prompt-sync") ()

const valor = Number(prompt('Digite o valor do jantar: '))
const conta1 = valor / 10
const conta2 = valor + conta1 
console.log (`O valor do jantar ficou em R$ ${valor} + a taxa do garçom, o total ficou em R$: ${conta2}`)
