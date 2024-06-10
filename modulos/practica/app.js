require('./config')

console.log("| ", global.appName," |")
console.log("| Version: ", global.version)
console.log("| Ruta de la practica: ", global.ruta)

const fs = require('fs')

function ReEscribir(ruta, contenido, cb) {
    fs.writeFile(ruta,contenido,(err) => {

    })
}

function leerArchivo(ruta,cb){
    fs.readFile(ruta,(err,data) => {
        if (err){
            cb(err,"")
        }else{
            cb(err,data.toString())
        }
    })
}
function escribirArchivo(ruta,contenido,cb){
    fs.appendFile(ruta,contenido,(err) =>{
        if (err){
            throw err
        }
    })
}

archivo =ruta + "/usuarios.txt"
archivoConteo = ruta + "/contar.txt"

//ReEscribir(archivo,"Daniel Felacio",function(){})

leerArchivo(archivoConteo,(err,data)=> {
    if (err){
        ReEscribir(archivoConteo,"0",function(){})
    }else{
        conteo = parseInt(data,10) 
        if (isNaN(conteo)){
            conteo = 0
        }
        ReEscribir(archivoConteo,(conteo + 1).toString(),function(){})
        console.log("Numero de Registros: ", conteo)
    }

    
    if (conteo == 0){
        contenido = 'Daniel felacio'
    }else{
        contenido = ',Daniel felacio'
    }
    
    escribirArchivo(archivo,contenido,function(){})
    leerArchivo(archivo,function(err,data){
        data.split(",").forEach((usuario,i) => {
            console.log(i + 1,") ",usuario)
        });
    })
})


