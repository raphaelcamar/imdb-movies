import { Movie } from "../domain";

export class MovieAdapter {
  execute(movie: any): Movie.Detailed{
    return {
      ...movie,
      Actors: movie?.Actors?.split(','),
      Genre: movie?.Genre.split(','),
      Metascore: isNaN(movie?.Metascore) ? 0 : Number(movie?.Metascore)
    }
  }
}