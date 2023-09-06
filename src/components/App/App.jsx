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

function App() {
  const location = useLocation();
  const isAuthPage = ['/signin', '/signup', '/profile'].includes(location.pathname);
  return (
    <div className="page">
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
