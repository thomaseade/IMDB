import {Movie} from "./Movie"

import { Professional } from "./Professional"

let actor1 = new Professional ("Thomas Eade", 27, 91, 184, false, "Español", 10, "Actor");
let actor2 = new Professional ("Pepe", 40, 80, 170, false, "Chino", 0, "Actor" );
let actor3 = new Professional ("Rodrigo", 75, 75, 180, false, "Español", 2, "Actor");
let director1 = new Professional ("Ramon", 35, 90, 191, false, "Español", 2, "director");
let escritor1 = new Professional ("Alvaro", 25, 80, 175, false, "Español", 1, "Escritor");

let laClase =  new Movie("La Clase", 2023, "España", "Drama");

laClase.actors = [actor1, actor2, actor3];
laClase.director = director1;
laClase.writer = escritor1;
laClase.language = "Español";
laClase.plataforma = "Netflix";
laClase.isMCU = true;
laClase.mainCharacterName = "Dani";
laClase.producer = "Thomas";
laClase.distributor = "Codenotch";

laClase.atributosPeli();

