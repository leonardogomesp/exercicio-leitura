const fs = require("fs")

const database = fs.readFileSync('./novo-arquivo2', 'utf-8')

database.split("-").forEach(i => {
    console.log(i)
})