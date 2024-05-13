function hola(nombre,miCallBack){
    setTimeout(function() {
        console.log("Hola, "+ nombre)
        miCallBack(nombre)
    },1000);
}

function hablar(miCallBackHablar){
    setTimeout(function(){
        console.log("bla bla bla")
        miCallBackHablar()
    },1000);
}

function adios(nombre,otroCallBack){
    setTimeout(function(){
        console.log("adios, " + nombre);
        otroCallBack();
    },1000)
}

hola("David",function(nombre){
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nombre, function(){
                    console.log("adios "+ nombre)
                })
            })
        })
    })

})