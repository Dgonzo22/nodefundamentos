// const { exec, spawn } = require('child_process');

// function executarComando(){
    
//     //ejecutamos el siguiente comando
//     exec('node modulos//consola.js',(err,stdout,sterr)=> {
//         if (err){
//             console.error(err);
//             return false;
//         }
//         console.log(stdout)
//     })

// }


// let proceso = spawn('ls',['-la'])

// console.log(proceso.pid)
// console.log(proceso.connected)

// proceso.stdout.on("data",function(dato) {
//     console.log('Esta Muerto')
//     console.log(proceso.killed)
//     console.log(dato.toString())
// })

// proceso.on('exit',function(){
//     console.log('El proceso termino')
//     console.log(proceso.killed)
// })


process.on('beforeExit',() => {
    console.log('El proceso va a terminar')
})

process.on('exit',() => {
    console.log('El proceso acabo')
})

process.on('uncaughtException',(err,origen) => {
    console.log('vaya se nos ha olvidado capturar el error')
    console.error(err)
})

funcionqueNoExite()

console.log('Si el error no se recoge no existe')


