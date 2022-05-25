const { peliculasMock } =require('../utils/mocks/peliculas');


class peliculasService{

    async getPeliculas(){
        const peliculas = await Promise.resolve(peliculasMock);
        return peliculas || [];
    }

    async getPelicula(){
        const pelicula = await Promise.resolve(peliculasMock[0]);
        return pelicula || [];
    }

    async createPelicula(){
        const createPeliculaid = await Promise.resolve(peliculasMock[0].id);
        return createPeliculaid;

    }

    async updatePelicula(){
        const createPelicula =await Promise.resolve(peliculasMock[0].id);
        return updatePelicula;
    }

    async removePelicula(){
        const removePelicula = await Promise.resolve(peliculasMock[0].id);
        return removePelicula;
    }

    

}

module.exports = peliculasService