import React from 'react';
import './Card.css';
import { useAppContext } from '../Components/utils/GlobalContextDentista';
import { Link } from 'react-router-dom';
import image from '../assets/doctor.jpg';

const Card = ({ dentista }) => {
  const { addFav, removeFav, favs } = useAppContext();

  const { id, name, username } = dentista;
  const isFavorito = favs.some((fav) => fav.id === id);

  const handleAddFav = (e) => {
    e.preventDefault();
    if (isFavorito) {
      removeFav(id);
    } else {
      addFav(id);
    }
  };

  const cardClass = isFavorito ? 'fav' : 'card';
  const nameClass = isFavorito ? 'favName' : 'name';
  const usernameClass = isFavorito ? 'favUsername' : 'username';

  return (
    <div className="allcards">
      <Link className="link" to={`/detail/${id}`}>
        <div className={cardClass}>
          <img src={image} width="45%" style={{ borderRadius: '50%' }} alt="doctor" />
          <h1 className={nameClass}>{name}</h1>
          <p className={usernameClass}>{username}</p>
        </div>
      </Link>
      <button onClick={handleAddFav} className={isFavorito ? 'deleteButton' : 'favButton'}>
        {isFavorito ? 'Eliminar de Favoritos' : 'Agregar a favoritos'}
      </button>
    </div>
  );
};

export default Card;
