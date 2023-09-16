import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useThemeContext } from './utils/GlobalContextTheme';

const Navbar = () => {
  const { theme, toggleTheme, imgTheme } = useThemeContext();

  const stylesTheme = {
    backgroundColor: theme === 'light' ? '#D8D9D9' : '#434243',
    color: theme === 'light' ? '#434243' : '#D8D9D9',
  };

  return (
    <nav style={stylesTheme} className="navbar">
      <Link className="logo" style={stylesTheme} to="/">
        <span className="ilogo">D</span>
        <p>H DENTISTAS 🦷</p>
      </Link>
      <div className="links-container">
        <Link className="links" style={stylesTheme} to="/">
          Home
        </Link>
        <Link className="links" style={stylesTheme} to="/favs">
          Favoritos
        </Link>
        <Link className="links" style={stylesTheme} to="/contacto">
          Contacto
        </Link>
      </div>
      <div className="contButton">
        <button className="button" onClick={toggleTheme}>
          <img src={imgTheme} alt="Icono de Tema" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;