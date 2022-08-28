export namespace Movie {
  export interface Basic {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
  }

  export interface Detailed {
    Actors: string[]
    Awards: string[]
    BoxOffice: string
    Plot: string
    Genre: string[]
    Metascore: number
    Title: string
    Released: string
    Poster: string
  }
}
