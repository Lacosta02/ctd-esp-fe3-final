import React from 'react';
import './Footer.css';
import { useThemeContext } from './utils/GlobalContextTheme';
import imageDH from '../assets/DH.png'; // Cambié el nombre de la variable 'image' a 'imageDH'

const Footer = () => {
  const { theme } = useThemeContext();

  const stylesTheme = {
    backgroundColor: theme === 'light' ? '#D8D9D9' : '#434243',
    color: theme === 'light' ? '#434243' : '#D8D9D9',
  };

  return (
    <footer className="footer" style={stylesTheme}>
      <img className="image" src={imageDH} alt="DH" /> {/* Cambié el nombre de la clase y la variable de la imagen */}
      <h6 className="name">Mariano José Acosta - 2023</h6>
    </footer>
  );
};

export default Footer;