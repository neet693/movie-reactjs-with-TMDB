import axios from "axios";

const apikey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL


//Export Functions get movies
export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/top_rated?page=1&api_key=${apikey}`)
    return movie.data.results
    // console.log({ movieList: movie })
}

//Export Function search movies
export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apikey}`)
    return search.data
    // console.log(q)
}