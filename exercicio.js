const evoluiComPedra = require('./pokemon-evolucao-pedra') 
// A variavel evoluiComPedra esta recebendo o arquivo pokemon-evolucao-pedra atraves da funcao require
const fs = require("fs")
// A variavel fs esta recebendo da funcao require o modulo fs
const database = fs.readFileSync('./novo-arquivo2', 'utf-8')

const leitura = database.split("\n")
console.log({leitura, database})
/*
function primeiraLetraMaiuscula(palavra) {
    
    const palavraSemEspaco = palavra.trim()
    return palavraSemEspaco[0].toUpperCase() + palavraSemEspaco.slice(1).toLowerCase()
}


function faltaEvoluir(objeto) {
    if (evoluiComPedra.includes(objeto[0].trim())) {
        return "Evolui com pedra!"
    }
   
    return 16 - obterNivel(objeto)

}


function obterNivel(pokemon) {
    return parseInt(pokemon[1].substring(3))
}

function imprimir(pokemon) {

    const nomePokemon = primeiraLetraMaiuscula(pokemon[0])
    const nivel = obterNivel(pokemon)
    const tipo = primeiraLetraMaiuscula(pokemon[2])
    const ataque = primeiraLetraMaiuscula(pokemon[3])
    const evolucao = faltaEvoluir(pokemon)

    console.log(`Nome: ${nomePokemon} - Nível ${nivel}`)
    console.log(`Tipo: ${tipo} / Ataque: ${ataque}`)
    console.log(`Falta quantos níveis para evoluir? ${evolucao}`)
    console.log("\n")
}

function main(pokemon) {
    for (i = 0; i < leitura.length; i++) {
        pokemon = leitura[i].split('-')
        imprimir(pokemon)
    }

}
for (i = 0; i < evoluiComPedra.length; i++) {
    pokemon = evoluiComPedra[i]
}
return main()*/