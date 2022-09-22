const prompt = require("prompt-sync") ()
const num = Number(prompt('Digite um número:'))
const soma1 = num+1
const soma2 = num-1
console.log (`Os vizinhos do número: ${num} \nO anterior é ${soma2} e o sucessor é ${soma1}`)