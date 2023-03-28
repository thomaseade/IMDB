import { Movie } from "./Movie";


export class Imdb {
    public películas: Movie[];
  
    constructor(películas: Movie[]) 
    {
      this.películas = películas;
    }
  }

