import './App.css';
import { getMovieList, searchMovie } from "./api"
import { useEffect, useState } from 'react';

const App = () => {
  const [TopMovies, setTopMovies] = useState([])
  useEffect(() => {
    getMovieList().then((result) => {
      setTopMovies(result)
    })
  }, [])

  const TopMoviesList = () => {
    return TopMovies.map((movie, i) => {
      return (
        <div className='Movie-wrapper' key={i}>
          <div className='Movie-title'>{movie.title}</div>
          <img className='Movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="Movie Posters"></img>
          <div className='Movie-date'>Realese Date:{movie.release_date}</div>
          <div className='Movie-rate'>{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setTopMovies(query.results)
    }

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React JS Movie App with TMDB API</h1>
        <input className='Movie-search' placeholder='Cari Film'
          onChange={({ target }) => search(target.value)} />
        <div className='Movie-container'>
          <TopMoviesList />
        </div>
      </header>
    </div>
  );
}

export default App;
