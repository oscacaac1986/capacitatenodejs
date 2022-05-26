const express = require('express');
const colors = require('colors'); 
const server = express();
const {config} =require('./server');
const peliculasAPI =require('./routes/peliculas.js');
const { append } = require('express/lib/response');


peliculasAPI(server);

server.listen(config.port, () => {
    console.log('Servidor en el puerto 3000',colors.green);
    console.log(config.port);
    
})


/* server.get('/', (req, res) => {
    res.send( '<h1> Hola Server Mommmmmm </h1>');
    res.end();
}) */