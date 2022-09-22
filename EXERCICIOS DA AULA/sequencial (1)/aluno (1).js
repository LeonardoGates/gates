const prompt = require("prompt-sync")()

const nome = prompt("Nome do Aluno: ")
const n1 = Number(prompt('1° Nota: '))
const n2 = Number(prompt('2° Nota: '))
const media = (n1 + n2) / 2

if (media >= 6) {
    console.log(`Parabuais ${nome}! Você passou.`)
} else {
    console.log(`Vish paizão, Você rodou`)
}

console.log(`Média: ${media.toFixed(1)}`)