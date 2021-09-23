const fs = require('fs')
const path = './files'
const files = fs.readdirSync(path);
const argumento = process.argv[2]

switch (argumento) {
    case "count":
            let count = console.log(files.length);
        break;
        
    case "size":
            let size = files.map(file => fs.appendFileSync('./summary.txt', file + ' ' + fs.statSync(path + '/' + file).size + ' kb \n'))
        break;
    
    case "length":
            let charsTot = 0

            let length = files.map(function (x) {
                chars = fs.readFileSync(path + '/' + x, 'utf-8').length
                charsTot += chars
                fs.appendFileSync('./summary.txt', x + ' ' + chars + ' chars \n')
                })
            
                fs.appendFileSync('./summary.txt','\n ' + charsTot + ' chars totales \n')
            // files.reduce() - SEGURO SE PUEDE HACER ASI PERO NO TERMINO DE DARME CUENTA COMO PASARLE LOS CHARS SI NO ESTAN EN EL ARRAY
    

        break;
    
    case "search":

        let search = files.map(function(x) {
            let texto = fs.readFileSync(path + '/' + x, 'utf-8')
            if (texto.search(process.argv[3]) != -1) {
                console.log(x)
            }
        })

        break;
    
    
    default: console.log("El comando -" + argumento + "- no se reconoce. Los comandos validos son: count, size, length, search")
        break;
} 






