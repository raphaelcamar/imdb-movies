import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader, Spacing } from "../../components/atoms";
import { ErrorMessage } from "../../components/atoms/error-message";
import { MovieInformations } from "../../components/organisms";
import { DetailsContainer } from "../../components/templates";
import { Movie } from "../../domain";
import { MovieRepository } from "../../repositories";
import { HideImg, Img, StyledLink } from "./styles";


interface ParamsType {
  id: string
}

export const MovieDetails = (): React.ReactElement => {

  const [movie, setMovie] = useState<Movie.Detailed>({} as Movie.Detailed)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const { id } = useParams<ParamsType>();

  const searchById = async (): Promise<void> => {
    try{
      setError(false)
      setLoading(true)
      const result = await new MovieRepository().searchById(id)
      setMovie(result)

    }catch(err) {
      setError(true)

    }finally {
      setLoading(false)

    }
  }

  useEffect(() => {
    searchById()
  }, [])

  const renderResult = (): React.ReactElement => {
    return (
      <>
         {loading ? (
          <Loader />
        ) : (
          <>
            <HideImg>
              <Img src={movie?.Poster} alt="Movie poster" />
            </HideImg>
            <MovieInformations movie={movie} />
          </>
        )}
      </>
    )
  }

  const renderResultOrError = (): React.ReactElement => {
    return (
      <>
        {error ? (
          <ErrorMessage>Não foi possível buscar o filme informado.</ErrorMessage>
        ) : (
          renderResult()
        )}
      </>
    )
  }

  return (
    <>
      <StyledLink to={'/'}>Voltar para a tela inicial</StyledLink>
      <Spacing vertical={24} />
      <DetailsContainer>
        {renderResultOrError()}
      </DetailsContainer>
    </>
  )
}