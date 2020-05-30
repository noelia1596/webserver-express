const http = require('http');


http.createServer((req, res) => { //PARA CREAR EL SERVIDOR DE HTTP

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Noelia',
            edad: 24,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);
console.log('Escuchando el puerto 8080');