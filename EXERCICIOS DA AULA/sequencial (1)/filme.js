const prompt = require("prompt-sync") ()

const titulo = prompt("Titulo do Filme: ")
const duracao = Number(prompt("Duração: "))

const horas = Math.floor(duracao / 60)
const minutos = duracao % 6

console.log (`A duração de "${titulo}" tem a duração de: `)
console.log(`${horas} Horas e`)
console.log(`${minutos} minutos`)