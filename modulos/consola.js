/* solo nos permite ver algo 
 */
console.log("hola")
/*
lo mismo pero para error, el cual lo va a pintar en rojo
*/
console.error("Error super falta")
console.warn("Error super falta")
/*
para un tabla bien bonita n la consola console.tabla te mostrara de forma mas bonita un json como estructura de tabla
*/
var tabla = [
    {
        a: 1,
        b: "Z"
    },
    {
        a: 2,
        b: 'S'
    }
]
console.table(tabla)

/*
nos permite agrupar entre comillas un monton de logs
*/
console.log('jummmm')
console.group("Coveracion panas")
console.log("hola");
console.log("wenas");
console.log("y entonces?");
console.log("listo para el 2 pa 2 ");
console.groupEnd("Coveracion panas")
/*
contadores
*/

console.count("Veces")
console.count("Veces")
console.count("Veces")
console.count("Veces")
console.count("Veces")
console.count("Veces")
console.countReset("Veces")
console.count("Veces")
console.count("Veces")

console.assert(1 === 2, "Este mensaje se muestra porque la condición es falsa.");