const fs = require("fs")

const database = fs.readFileSync('./novo-arquivo2', `utf-8`)

const leitura = database.split("\n")
//console.log(leitura)
//Nome:
//Tipo:
//Falta quantos niveis para evoluir? 

for(i= 0; i< leitura.length; i++){
    //console.log(leitura[i])
    var objeto = leitura[i].split('-')
    console.log("Nome: " + objeto[0] + "- Nível" + objeto[1] + "\nTipo: " + objeto[2] + "Ataque: " + objeto[3] + "\nFalta quantos níveis para evoluir?: ")
}




//fazer um for para colocar os arrays em uma variavel
//depois outro for para varrer essa variavel, fazer split dela e organizar o print 