// A variavel evoluiComPedra esta recebendo o arquivo pokemon-evolucao-pedra atraves da funcao require
const evoluiComPedra = require('./pokemon-evolucao-pedra')
// A variavel fs esta recebendo da funcao require o modulo fs
const fs = require("fs")
// A variavel database está recebendo a variavel fs e lendo o novo-arquivo2
const database = fs.readFileSync('./novo-arquivo2', 'utf-8')
// A variavel leitura está recebendo a variavel database e separando pela quebra de linha
const leitura = database.split("\n")

// A função primeiraLetraMaiuscula é criada
function primeiraLetraMaiuscula(palavra) {
    // A variavel palavraSemEspaco está recebendo palavra e retirando seus espaços com o .trim ()
    const palavraSemEspaco = palavra.trim()
    // Está sendo retornado uma palavra com inicial maiuscula 
    // O método toUpperCase é responsável por transofrmar em maiusculo
    // O método toLowerCase é responsável por transformar em minusculo
    // O método slice é responsável por dividir a string a partir de um indice
    // Todos estes métodos são encontrados dentro de qualquer string
    return palavraSemEspaco[0].toUpperCase() + palavraSemEspaco.slice(1).toLowerCase()
}

// A função faltaEvoluir é criada
function faltaEvoluir(pokemon) {
    // Estabelece um if que verifica se a nossa entrada é igual as informações do banco de dados
    // O método includes procura a nossa entrada dentro de pokemon-evolucao-pedra,
    // se positivo retorna true, se negativo, retorna false. 
    if (evoluiComPedra.includes(pokemon[0].trim())) {
        // Se nosso if receber true, retornará a string "Evolui com pedra!"
        return "Evolui com pedra!"
    }
    // Se nosso if receber false, retornará quantos niveis restam para evoluir.
    return 16 - obterNivel(pokemon)
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
    for (i = 0; i < evoluiComPedra.length; i++) {
        pokemon = evoluiComPedra[i]
    }
}

main()