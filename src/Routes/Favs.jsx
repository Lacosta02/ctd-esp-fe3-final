import React from 'react';
import Card from '../Components/Card';
import { useAppContext } from '../Components/utils/GlobalContextDentista';
import '../Components/Card.css';
import { Link } from 'react-router-dom';

const Favs = () => {
  const { favs } = useAppContext();

  const uniqueFavs = favs.filter((value, index, self) => {
    return self.findIndex((item) => item.id === value.id) === index;
  });

  const favoritos = uniqueFavs.map((fav) => (
    <Link key={fav.id} className="link" to={`/detail/${fav.id}`}>
      <Card dentista={fav} />
    </Link>
  ));

  const hasFavoritos = favoritos.length > 0;

  return (
    <div className={`favsrouter ${!hasFavoritos && 'empty'} ${favoritos.length <= 3 && 'smallHeight'}`}>
      <h1 className="titulo">Favoritos</h1>
      <div className={`container ${!hasFavoritos && 'empty'}`}>
        {favoritos.length > 0 ? (
          favoritos
        ) : (
          <p>DH DENTISTAS 🦷</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
