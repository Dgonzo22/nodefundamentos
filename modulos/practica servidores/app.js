const http = require('http')

port = 3000

http.createServer(router).listen(port)

function router(req,res){
    console.log('Nueva solicitud')
    console.group('solicitud')
    console.log('port: ', port)
    console.log('url: ', req.url)
    switch(req.url){
        case '/':
            res.write('<h1>Bienvenido</h1>')
        default:
            res.write('<h1> Link equivocado!!</h1>')
            res.write(`<h3>no existe tal <strong>${req.url}</strong> </h3>`)  
    }
    res.end()
    console.groupEnd('solicitud')

}

