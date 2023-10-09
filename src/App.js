import {useState, useEffect, useRef} from 'react';
import Movie from './components/Movie';

const featuresAPI = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const searchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {

  const [movies, setMovies] = useState([]);
  const searchRef = useRef('');

  function fetchData(API) {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results);
    })
  }

  useEffect(() => {
    fetchData(featuresAPI)
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetchData(searchAPI + searchRef.current.value)
    searchRef.current.value = '';
  }

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search" className="search" ref={searchRef} />
        </form>
      </header>
      <div className="movies">
        {movies.map(movie => (
          <Movie title={movie.title} image={movie.poster_path} overview={movie.overview} vote_average={movie.vote_average} key={movie.id} />
        ))}
      </div>
    </>
  )
}

export default App;
