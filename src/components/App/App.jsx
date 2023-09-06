import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import useResize from '../../hooks/useResize';
import NotFound from '../NotFound/NotFound';

function App() {
  const location = useLocation();
  const windowWidth = useResize();
  const isMobile = windowWidth <= 800;

  const routesWithHeaderFooter = ['/', '/movies', '/saved-movies'];
  const showHeader = routesWithHeaderFooter.includes(location.pathname) || (isMobile && location.pathname === '/profile');
  const showFooter = routesWithHeaderFooter.includes(location.pathname);

  return (
    <div className="page">
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
