import { Movie } from "../../../domain"
import { MetaScore } from "../../atoms"
import { InfoList } from "../../molecules"
import { Header, MovieDescription, MovieTitle, WrapperInformations } from "./styles"

interface IMovieInformations {
  movie: Movie.Detailed
}

export const MovieInformations = ({ movie }: IMovieInformations): React.ReactElement => {
  return (
    <>
      <WrapperInformations>
        <Header>
          <div>
            <MovieTitle>{movie?.Title}</MovieTitle>
            <MovieDescription>{movie?.Plot}</MovieDescription>
          </div>
          <MetaScore score={movie?.Metascore} />
        </Header>
        <InfoList list={movie?.Actors} title="Atores"/>
        <InfoList list={movie?.Genre} title="Gênero"/>
      </WrapperInformations>
    </>
  )
}