const { peliculasMock } =require('../utils/mocks/peliculas');


class peliculasService{

    async getPeliculas(){
        const peliculas = await Promise.resolve(peliculasMock);
        return peliculas || [];
    }

    async getPeliculas(){
        const peliculas = await Promise.resolve(peliculasMock);
        return peliculas || [];
    }


}