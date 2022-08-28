import { MovieAdapter } from "../adapters"
import { MakeRequest } from "../config"
import { Movie } from "../domain"

export class MovieRepository {
  async searchByString(search: string): Promise<ResponseSearchString>{
    const result =  await MakeRequest({
      baseURL: `${process.env.REACT_APP_BASE_URL}/?s=${search}&=type=movie&apiKey=${process.env.REACT_APP_API_KEY}`,
      method: 'get'
    })
  
    const data = result.data as ResponseSearchString
  
    if(data?.Response === 'False'){
      throw new Error()
    }
  
    return data
  }

  async searchById(search: string): Promise<ResponseDetails> {
    const result =  await MakeRequest({
      baseURL: `${process.env.REACT_APP_BASE_URL}/?i=${search}&apiKey=${process.env.REACT_APP_API_KEY}`,
      method: 'get'
    })

    const adapter = new MovieAdapter()
    const data = result.data as ResponseDetails
    if(data?.Response === 'False'){
      throw new Error()
    }

    const adaptee = adapter.execute(data)

    return adaptee
  }
}


interface ResponseSearchString {
  Response?: string
  Search: Movie.Basic[]
  totalResults: number
}

interface ResponseDetails extends Movie.Detailed {
  Response?: string
}
