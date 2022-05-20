const express = require('express');
const {peliculasMock} =require('../utils/mocks/peliculas');

function peliculasAPI(app) {
    const router = express.Router();
    app.use('/api/peliculas',router);

    router.get('/',async function (req,res,next) {
        try {
            const peliculas =await Promise.resolve(peliculasMock);
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