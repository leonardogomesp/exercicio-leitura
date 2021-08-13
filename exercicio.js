const fs = require("fs")

const database = fs.readFileSync('./novo-arquivo2', `utf-8`)

const leitura = database.split("\n")
//console.log(leitura)
//Nome:
//Tipo:
//Falta quantos niveis para evoluir? 
    var objeto;
for(i= 0; i< leitura.length; i++){
    //console.log(leitura[i])
    objeto = leitura[i].split('-')
    let evoluindo = parseFloat.objeto[1] - 13
    console.log("Nome: " + objeto[0] + "- Nível" + objeto[1] + "\nTipo: " + objeto[2] + "Ataque: " + objeto[3] + `\nFalta quantos níveis para evoluir?: ${evoluindo} `)
}
function evolucao(){
   if (objeto[1] < 16 objeto[4]){
       objeto[1] - objeto[4]


   }else{

   }
}




//fazer um for para colocar os arrays em uma variavel
//depois outro for para varrer essa variavel, fazer split dela e organizar o print 