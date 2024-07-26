import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
// import {MovieList} from './index';

const GptMovieSuggestions = () => {
  const {movieResults, movieNames} = useSelector((store) => store.gpt);

  if(!movieNames) return false;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
       {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestions