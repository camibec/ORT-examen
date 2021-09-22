const fs = require('fs')

function cantidadArchivos() {
    fs.readdir('./files', (error, archivos) => { console.log(archivos.length)})
}



let argumento = process.argv[2]

switch (argumento) {
    case "count":
            cantidadArchivos()
        break;
        
    case "size":
        
        break;
    
    case "length":
        
        break;
    
    case "search":
        
        break;
    
    
    default: console.log("El comando " + argumento + " no se reconoce. Los comandos validos son: count, size, length, search")
        break;
}




