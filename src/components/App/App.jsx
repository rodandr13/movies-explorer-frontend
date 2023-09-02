import React from 'react';
import './App.css';

import Login from '../Login/Login';

// eslint-disable-next-line no-lone-blocks
{ /*
import Register from '../Register/Register';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'; */ }

function App() {
  return (
    <div className="page">
      <Login />

      {/*  <Register />
      <Header />
        <Main />
        <Movies />
        <SavedMovies />

        <Footer /> */}

    </div>
  );
}

export default App;
