const fs = require("fs")

const database = fs.readFileSync('./novo-arquivo2', `utf-8`)

const leitura = database.split("\n")
console.log(leitura)
Nome:
Tipo:
Falta quantos niveis para evoluir?
