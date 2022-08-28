import { SyntheticEvent, useState } from "react"
import { Loader, Spacing } from "../../components/atoms"
import { MovieCard } from "../../components/molecules"
import { Movie } from "../../domain"
import { ContainerCards } from "./styles"
import { FormSearch } from "../../components/organisms/form-search"
import { MovieRepository } from "../../repositories"
import { ErrorMessage } from "../../components/atoms/error-message"
import { useHistory } from 'react-router-dom'


export const Movies = (): React.ReactElement => {

  const [movies, setMovies] = useState<Movie.Basic[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const history = useHistory()

  const handleSearch = async (event: SyntheticEvent, value: string) => {
    event.preventDefault()

    try{
      setError(false)
      setLoading(true)
      const result = await new MovieRepository().searchByString(value)
      setMovies(result.Search)

    }catch(err) {
      setError(true)
    }finally {
      setLoading(false)
    }
  }

  const renderResult = (): React.ReactElement => {
    return (
      <>
        {loading ? (
          <Loader />
          ) : (
          <>
            {movies?.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                image={movie?.Poster}
                title={movie?.Title}
                handleClickMovie={() => history.push(`movie/${movie?.imdbID}`)} 
              />
            ))}
          </>
        )}
      </>
    )
  }

  const renderResultOrError = (): React.ReactElement => {
    return (
      <>
        {error ? (
          <ErrorMessage>Nenhum item foi encontrado com o texto informado</ErrorMessage>
        ) : (
          renderResult()
        )}
      </>
    )
  }


  return (
     <>
      <FormSearch handleSearch={(e, value) => handleSearch(e, value)} />
      <Spacing vertical={80} />
      {movies?.length > 0 && (
        <p>{movies?.length} filmes encontrados</p>
      )}
      <Spacing vertical={16} />
      <ContainerCards>
        <>
        {renderResultOrError()}
        </>
      </ContainerCards>
    </>
  )
}