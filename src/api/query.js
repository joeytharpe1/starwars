export const getMovies = async (page) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=star-wars&api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}`);
      const data = await response.json()

      return data
    } catch (error) {
      console.log('error', error)
    }
  }