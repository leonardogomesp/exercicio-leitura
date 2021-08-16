const fs = require("fs")
const database = fs.readFileSync('./novo-arquivo2', `utf-8`)
const leitura = database.split("\n")
//console.log(leitura.length)

function pikachu(objeto) {   
    if (objeto[0].indexOf("pikachu")) {
        console.log("Evolui com pedra!")
    }
}

function imprimir(objeto) {

    console.log("Nome: " + objeto[0] + " - Nível " + obterNivel(objeto)) 
    console.log("Tipo: " + objeto[2] + "/ Ataque: " + objeto[3])
    console.log(`Falta quantos níveis para evoluir? ` + faltaEvoluir(objeto) + "\n")
    
}
function faltaEvoluir(objeto){
    return 16 - obterNivel(objeto)
} 
//  nome: obterNivel
// entrada: Nv1000
// saida: 1000
function obterNivel(objeto){
    return parseInt(objeto[1].substring(3))
}

let objeto;
let evoluindo;
for (i = 0; i < leitura.length; i++) {
    objeto = leitura[i].split('-')
    imprimir(objeto)   
    obterNivel(objeto)    
}



//fazer um for para colocar os arrays em uma variavel
//depois outro for para varrer essa variavel, fazer split dela e organizar o print 