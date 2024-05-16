const fs = require('fs')

function leer(ruta,cb){
    fs.readFile(ruta,(error,data)=> {
        console.log(data.toString());
    })
}

function escribir(ruta,contenido,cb){
    fs.writeFile(ruta, contenido, (error)=> {
        if (error){
            console.log("hay un error")
        }else{
            console.log("se ha escrito correctamente")
        }
    })
}
function borrar(ruta,cb){
    fs.unlink(ruta, cb);
}
