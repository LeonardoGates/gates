const prompt = require("prompt-sync") ()

const nome = prompt('Digite seu nome: ')
const idade = Number(prompt('Digite sua idade: '))
const soma1 = Math.abs(idade - 2022)
console.log (`${nome}, você nasceu em : ${soma1}`)