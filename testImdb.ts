import { Imdb } from './Imdb';
import { Movie } from './Movie';


let pelicula1 = new Movie("La Clase", 2023, "España", "Drama");
let pelicula2 = new Movie("El Ordenador", 2022, "España", "Accion");
let pelicula3 = new Movie("El Teclado", 2000, "España", "Suspense");


let peliculas: Movie[] = [pelicula1, pelicula2, pelicula3];


let imdb = new Imdb(peliculas);


console.log(imdb.películas);