const fs = require('fs')

let cantidadArchivos = function () {
    fs.readdir('./files', (error, archivos) => { console.log(archivos.length)})
}


let incluyePalabra = function() { fs.readdir('./files', (error, archivos) => {
    let filtrado = archivos.filter(incluye(process.argv[3]));
    console.log(filtrado)
})};
// No llegue a terminarlo como lo que falta del parcial.



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
            incluyePalabra()
        break;
    
    
    default: console.log("El comando " + argumento + " no se reconoce. Los comandos validos son: count, size, length, search")
        break;
}