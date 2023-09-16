/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Components/Card.css';
import { useThemeContext } from '../Components/utils/GlobalContextTheme';
import image from '../assets/doctor.jpg';

const Detail = () => {
  const { theme } = useThemeContext();
  const { id } = useParams();
  const [dentista, setDentista] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchDentista() {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setDentista(response.data);
    } catch (error) {
      console.error(error);
      setError('Error al obtener los datos del dentista');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchDentista()
  }, [id]);

  const stylesTheme = {
    backgroundColor: theme === 'light' ? '#D8D9D9' : '#434243',
    color: theme === 'light' ? '#434243' : '#D8D9D9',
  };

  return (
    <div className="detalles">
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="cdetalles" style={stylesTheme}>
          <img
            src={image}
            width="30%"
            style={{ borderRadius: '50%' }}
            alt="doctor"
          />
          <h1 className="dtitulo">{dentista.name}</h1>
          <p className="ddatos">Email: {dentista.email}</p>
          <p className="ddatos">Teléfono: {dentista.phone}</p>
          <div className="dweb">
            <p>Website:</p>
            <Link className="link" to="/" style={stylesTheme}>
              www.{dentista.website}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
