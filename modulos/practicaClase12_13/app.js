function calcularCuadratica(sumar,a,b,a,c){
    if (sumar === true){
        return (-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 *a) 
    }else{
        return (-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 *a) 
    }
}
let a = 0;
let b = 2;
let c = 5;

try{
    x = calcularCuadratica(true, a, b, c)
    console.log(x)
}catch(err){
    console.error("Tienes un serio erro")
    console.error(err)
}