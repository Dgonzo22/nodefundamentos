function hola(nombre){
    return new Promise( function (resolve,reject) {
        setTimeout(function() {
            console.log("Hola, "+ nombre)
            resolve(nombre)
        },1500);
    }) 
}

function hablar(nombre){
    return new Promise((resolve,reject)=> {
        setTimeout(function(){
            console.log("bla bla bla")
            resolve(nombre)
        },1000);

    })
}

function adios(nombre){
    return new Promise( (resolve,reject) => {
        setTimeout(function(){
            console.log("adios, " + nombre);
            resolve(nombre);
        },1000)
    } ) 
}

//....
console.log('iniciando el proceso')
hola("Carlos")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el Proceso')
    }).catch(error => {
        console.log("el error es: ")
        console.log(error)
    })