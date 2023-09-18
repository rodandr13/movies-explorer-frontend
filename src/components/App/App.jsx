import React, { useEffect, useState } from 'react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import './App.css';

import CurrentUserContext from '../../context/CurrentUserContext';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import {
  addSavedMovie,
  checkAuth,
  deleteSavedMovie, editUserInfo, getSavedMovies,
  getUserInfo,
  login,
  logout,
  register,
} from '../../utils/MainApi';
import LoggedInContext from '../../context/LoggedInContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { BASE_URL } from '../../utils/constants';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [editProfileError, setEditProfileError] = useState('');
  const routesWithHeaderFooter = ['/', '/movies', '/saved-movies'];
  const showHeader = routesWithHeaderFooter.includes(location.pathname) || (location.pathname === '/profile');
  const showFooter = routesWithHeaderFooter.includes(location.pathname);

  useEffect(() => {
    checkAuth()
      .then((res) => {
        console.log(res);
        if (res.loggedIn) {
          setLoggedIn(true);
          return getUserInfo();
        }
        return null;
      })
      .then((userInfo) => {
        if (userInfo) {
          console.log(userInfo);
          setCurrentUser(userInfo);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLogin = ({ email, password }) => {
    login({
      email,
      password,
    })
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    register({
      name,
      email,
      password,
    })
      .then((user) => {
        console.log(user);
        return handleLogin({ email, password });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    logout()
      .then((res) => {
        console.log(res);
        setLoggedIn(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log(savedMovies);
  }, [savedMovies]);

  const handleSavedMovie = (movie) => {
    addSavedMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${BASE_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${BASE_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
        console.log(savedMovies);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDeleteMovie = (movie) => {
    let movieToDelete;
    if (movie._id) {
      movieToDelete = movie;
    } else {
      movieToDelete = savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
    }
    deleteSavedMovie(movieToDelete._id)
      .then((res) => {
        console.log(res);
        const updatedSavedMovies = savedMovies.filter(
          (savedMovie) => savedMovie._id !== movieToDelete._id,
        );
        setSavedMovies(updatedSavedMovies);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (loggedIn) {
      getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loggedIn]);

  const handleEditUser = ({ name, email }) => editUserInfo({ name, email })
    .then((user) => {
      setCurrentUser(user);
    })
    .catch((error) => {
      console.log(error);
      setEditProfileError(error.message);
      throw error;
    });

  return (
    <LoggedInContext.Provider value={loggedIn}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          {showHeader && <Header />}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={(
                <ProtectedRoute
                  element={Movies}
                  savedMovies={savedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                  loggedIn={loggedIn}
                  handleSavedMovie={handleSavedMovie}
                />
              )}
            />
            <Route
              path="/saved-movies"
              element={(
                <ProtectedRoute
                  element={SavedMovies}
                  movies={savedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                  loggedIn={loggedIn}
                />
              )}
            />
            <Route
              path="/profile"
              element={(
                <ProtectedRoute
                  element={Profile}
                  handleLogout={handleLogout}
                  loggedIn={loggedIn}
                  handleEditUser={handleEditUser}
                  editProfileError={editProfileError}
                />
              )}
            />
            <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
            <Route path="/signup" element={<Register handleRegister={handleRegister} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {showFooter && <Footer />}
        </div>
      </CurrentUserContext.Provider>
    </LoggedInContext.Provider>
  );
}

export default App;
