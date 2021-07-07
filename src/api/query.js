import {API_KEY} from './config'

export const getMovies = async (page) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=star-wars&api_key=${API_KEY}&language=en-US&page=${page}`);
      const data = await response.json()

      return data
    } catch (error) {
      console.log('error', error)
    }
  }