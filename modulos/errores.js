/*Funcion diseñada para tener un error*/
function otrafuncionRompe(){
    seRompe();
}

function seRompe(){
    return 3 + z;
}

try {
    seRompe();
}catch(err){
    console.error("Un error");
    console.error(err)
    console.error("Pero no pasa nada");
}
console.log("Jummm termino")