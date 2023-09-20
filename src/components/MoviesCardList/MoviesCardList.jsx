import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  BASE_URL, PATHS, RESIZE_DEBOUNCE_TIME, SCREEN_CONFIG, SCREEN_WIDTH,
} from '../../utils/constants';
import { convertDuration } from '../../utils/utils';
import useResize from '../../hooks/useResize';

function MoviesCardList({
  movies,
  searchError,
  handleSavedMovie,
  handleDeleteMovie,
  savedMovies,
}) {
  const [displayMovies, setDisplayMovies] = useState([]);
  const location = useLocation();
  const isMoviesPage = location.pathname === PATHS.MOVIES;
  const isSavedMoviesPage = location.pathname === PATHS.SAVED_MOVIES;
  const pageWidth = useResize(RESIZE_DEBOUNCE_TIME);

  const getScreenConfig = (width) => {
    if (width >= SCREEN_WIDTH.LARGE) return SCREEN_CONFIG.LARGE;
    if (width >= SCREEN_WIDTH.MEDIUM) return SCREEN_CONFIG.MEDIUM;
    if (width >= SCREEN_WIDTH.SMALL) return SCREEN_CONFIG.SMALL;
    return SCREEN_CONFIG.XSMALL;
  };

  const calculateMoviesCount = (width) => getScreenConfig(width).initial;
  const calculateAdditionalMovies = (width) => getScreenConfig(width).additional;
  const [moviesCount, setMoviesCount] = useState(calculateMoviesCount(pageWidth));

  useEffect(() => {
    if (isSavedMoviesPage) {
      setDisplayMovies(movies);
    } else {
      setDisplayMovies(movies.slice(0, moviesCount));
    }
  }, [moviesCount, movies, savedMovies, isSavedMoviesPage]);

  useEffect(() => {
    setMoviesCount(calculateMoviesCount(pageWidth));
  }, [pageWidth]);

  const handleMoreButtonClick = () => {
    setMoviesCount((prevCount) => prevCount + calculateAdditionalMovies(pageWidth));
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
                movie={movie}
                name={movie.nameRU}
                image={`${isMoviesPage ? BASE_URL : ''}${movie.image.url || movie.image}`}
                duration={convertDuration(movie.duration)}
                key={movie.id || movie.movieId}
                handleSavedMovie={handleSavedMovie}
                handleDeleteMovie={handleDeleteMovie}
                savedMovies={savedMovies}
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
