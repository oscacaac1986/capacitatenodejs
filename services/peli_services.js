const { peliculasMock } =require('../utils/mocks/peliculas');
const {}=require('../lib/mongo');
const MongoLib = require('../lib/mongo.js');


class peliculasService{

    
    async getPeliculas({tags}){
        const query= tags && {tags:{$in:tags}}
        const peliculas = await this.mongoDB.getAll(this.collection,query);
        return peliculas || [];
    }

    async getPelicula({peliculaid}){

        const pelicula = await this.mongoDB.get(this.collection,peliculaid);
        return pelicula || [];
    }

    async createPelicula({pelicula}){
        const createpeliculaid= await this.mongoDB.create(this.collection,pelicula)
        return createpeliculaid;
    }

    async updatePelicula({peliculaid,pelicula}){

        const updatepelicula= await this.mongoDB.update(this.collection,peliculaid,pelicula);
        return updatepelicula;
    }

    async deletePelicula ({peliculaId}){
        const deletePelicula= await this.mongoDB.delete(peliculaId);
        return deletePelicula
    }


}

module.exports = peliculasService;
