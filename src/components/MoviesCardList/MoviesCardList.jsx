import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import { BASE_URL } from '../../utils/constants';
import { convertDuration } from '../../utils/utils';
import useResize from '../../hooks/useResize';

function MoviesCardList({ movies, searchError }) {
  console.log(movies.length);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [moviesCount, setMoviesCount] = useState(0);
  const location = useLocation();
  const isMoviesPage = location.pathname === '/movies';
  const pageWidth = useResize();
  useEffect(() => {
    let resizeTimer;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      let newMoviesCount;
      if (pageWidth >= 1200) {
        newMoviesCount = 16;
      } else if (pageWidth >= 900) {
        newMoviesCount = 12;
      } else if (pageWidth >= 600) {
        newMoviesCount = 8;
      } else {
        newMoviesCount = 5;
      }
      setMoviesCount(newMoviesCount);
    }, 300);
    return () => {
      clearTimeout(resizeTimer);
    };
  }, [pageWidth, movies]);

  useEffect(() => {
    setDisplayMovies(movies.slice(0, moviesCount));
  }, [moviesCount, movies]);

  const handleMoreButtonClick = () => {
    let additionalMovies;
    if (pageWidth >= 1200) {
      additionalMovies = 4;
    } else if (pageWidth >= 3) {
      additionalMovies = 12;
    } else if (pageWidth >= 2) {
      additionalMovies = 8;
    } else {
      additionalMovies = 1;
    }
    setMoviesCount((prevCount) => prevCount + additionalMovies);
  };
  return (
    <section className="movies-card-list">
      {searchError ? (
        <p className="movies-card-list__error">{searchError}</p>
      ) : (
        <>
          <ul className="movies-card-list__list">
            {displayMovies.map((movie) => (
              <MoviesCard
                name={movie.nameRU}
                image={`${BASE_URL}${movie.image.url}`}
                duration={convertDuration(movie.duration)}
                key={movie.id}
                isLiked={movie.isLiked}
              />
            ))}
          </ul>
          {isMoviesPage && movies.length > moviesCount
            && <button onClick={handleMoreButtonClick} className="movies-card-list__more-btn" type="button">Еще</button>}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
