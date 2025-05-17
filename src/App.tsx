import { useEffect, useState } from 'react';
import './App.css'


type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
  overview: string;
};

type MovieJson = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_data: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

function App() {
  
  const fetchMovieList = async () => {
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    let url ="";
    if(keyword) {
      url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(keyword)}&include_adult=false&language=ja&page=1`;
    } else {
      url = `https://api.themoviedb.org/3/movie/popular?language=ja&page=1`;
    }
    const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
    });
    const data = await response.json();
    const result = data.results;
    const movieList = result.map((movie: MovieJson) => ({
      id: movie.id,
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      overview: movie.overview,
    }));
    setMovieList(movieList);
  };

  const [keyword, setKeyword] = useState("");
  const [movieList, setMovieList] = useState<Movie[]>([]);
  
  useEffect(() => {
    fetchMovieList();
  }, [keyword]);

  return (
     <div>
         <div>{keyword}</div>
        <input type="text" onChange={(e) => setKeyword(e.target.value)} />
        {movieList
          .filter((movie) => movie.original_title.includes(keyword))
          .map((movie) => (
          <div key={movie.id}>
            <h2>{movie.original_title}</h2>
            <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.original_title} 
            />
          <p>{movie.overview}</p>
          </div>
      ))}
    </div>
  )
}

export default App;