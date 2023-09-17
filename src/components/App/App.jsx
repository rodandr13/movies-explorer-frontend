import React, { useEffect, useState } from 'react';
import {
  Routes, Route, useLocation, useNavigate,
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
  checkAuth, getUserInfo, login, logout, register,
} from '../../utils/MainApi';
import LoggedInContext from '../../context/LoggedInContext';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
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

  return (
    <LoggedInContext.Provider value={loggedIn}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          {showHeader && <Header />}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile handleLogout={handleLogout} />} />
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
