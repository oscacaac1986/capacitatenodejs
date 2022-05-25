const express = require('express');
const peliculasService = require('../services/peli_services.js');


function peliculasAPI(app) {
    const router = express.Router();
    app.use('/api/peliculas',router);
    const peliculasServiceInic = new peliculasService();   
    router.get('/',async function (req,res,next) {
        try {
            const etiquetas =req.query;
            const peliculas = await peliculasServiceInic.getPeliculas({etiquetas});
            res.status(200).json({
                data:peliculas,
                message:'Peliculas Listadas'
            });
        } catch (error) {
            next(error)
        }
    });

    router.get('/:pelicula',async function (req,res,next) {
        
        try {
            const {id }=req.params;
            const etiquetas =req.query;
            const peliculas = await peliculasServiceInic.getPelicula({id});
            res.status(200).json({
                data:peliculas,
                message:'Peliculas Listadas'
            });
        } catch (error) {
            next(error)
        }
    });
}

module.exports = peliculasAPI;