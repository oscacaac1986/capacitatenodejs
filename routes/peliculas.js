const express = require('express');
const {peliculasMock} =require('../utils/mocks/peliculas');
const peliculasService =require('../services/peli_services.js');

function peliculasAPI(app) {
    const router = express.Router();
    app.use(express.json());
    app.use('/api/peliculas',router);
    const serv = new peliculasService();
    
    router.get('/',async function (req,res,next) {
        try {
            const query=req.query;
            const peliculas =await serv.getPeliculas({query})
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