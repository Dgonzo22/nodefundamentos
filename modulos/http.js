const http = require('http');

http.createServer(router).listen(3000)

function router(req, res){
    console.log('Nueva Peticion');
    console.log(req.url);
    //respuesta al suuario
    switch (req.url){
        case '/hola':
            res.write("HOla, que tal")
            res.end()
        default:
            res.write("Error 404: no se que quieres")
            res.end()
    }
//     res.writeHead(201,{'Content-type': 'text/plain'} )
//     res.write("Hola ya se usar http de nodeJS")
//     res.end();
}

console.log("puerto: 3000")