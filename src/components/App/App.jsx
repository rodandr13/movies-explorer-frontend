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
  deleteSavedMovie,
  editUserInfo,
  getSavedMovies,
  getUserInfo,
  login,
  logout,
  register,
} from '../../utils/MainApi';
import LoggedInContext from '../../context/LoggedInContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {
  BASE_URL,
  LOCAL_STORAGE_KEYS,
  PATHS,
  ROUTES_WITH_HEADER_FOOTER,
} from '../../utils/constants';
import ContentWithLoading from '../ContentWithLoading/ContentWithLoading';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [editProfileError, setEditProfileError] = useState('');
  const showHeader = ROUTES_WITH_HEADER_FOOTER.includes(location.pathname)
    || (location.pathname === PATHS.PROFILE);
  const showFooter = ROUTES_WITH_HEADER_FOOTER.includes(location.pathname);

  const handleLogin = ({ email, password }) => {
    login({
      email,
      password,
    })
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          navigate(PATHS.MOVIES);
        }
      })
      .catch((error) => {
        setLoginError(error.message);
        console.log(error);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    register({
      name,
      email,
      password,
    })
      .then(() => handleLogin({ email, password }))
      .catch((error) => {
        setRegisterError(error.message);
        console.log(error);
      });
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        Object.values(LOCAL_STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
        setSavedMovies([]);
        setLoggedIn(false);
        navigate(PATHS.MAIN);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      .then(() => {
        const updatedSavedMovies = savedMovies.filter(
          (savedMovie) => savedMovie._id !== movieToDelete._id,
        );
        setSavedMovies(updatedSavedMovies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditUser = ({ name, email }) => editUserInfo({ name, email })
    .then((user) => {
      setCurrentUser(user);
    })
    .catch((error) => {
      setEditProfileError(error.message);
      throw error;
    });
  useEffect(() => {
    checkAuth()
      .then((res) => {
        if (res.loggedIn) {
          setLoggedIn(true);
          return getUserInfo();
        }
        return null;
      })
      .then((userInfo) => {
        if (userInfo) {
          setCurrentUser(userInfo);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
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

  return (
    <LoggedInContext.Provider value={loggedIn}>
      <CurrentUserContext.Provider value={currentUser}>
        <ContentWithLoading isLoading={loading}>
          <div className="page">
            {showHeader && <Header />}
            <Routes>
              <Route path={PATHS.MAIN} element={<Main />} />
              <Route
                path={PATHS.MOVIES}
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
                path={PATHS.SAVED_MOVIES}
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
                path={PATHS.PROFILE}
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
              <Route
                path={PATHS.SIGNIN}
                element={(
                  <Login
                    handleLogin={handleLogin}
                    loginError={loginError}
                    setLoginError={setLoginError}
                  />
                )}
              />
              <Route
                path={PATHS.SIGNUP}
                element={(
                  <Register
                    handleRegister={handleRegister}
                    registerError={registerError}
                    setRegisterError={setRegisterError}
                  />
                )}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {showFooter && <Footer />}
          </div>
        </ContentWithLoading>
      </CurrentUserContext.Provider>
    </LoggedInContext.Provider>
  );
}

export default App;
