function hola(nombre,miCallBack){
    setTimeout(function() {
        console.log("Hola, "+ nombre)
        miCallBack(nombre)
    },1000);
}

function adios(nombre,otroCallBack){
    setTimeout(function(){
        console.log("adios, " + nombre);
        otroCallBack();
    },1000)
}

hola("David",function(nombre){
    adios(nombre, function(){
    })
})