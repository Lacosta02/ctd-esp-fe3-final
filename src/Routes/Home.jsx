import React from 'react';
import { useAppContext } from '../Components/utils/GlobalContextDentista';
import Card from '../Components/Card.jsx';
import '../Components/Card.css';
import { useThemeContext } from '../Components/utils/GlobalContextTheme';

const Home = () => {
  const { dentists } = useAppContext();
  const { theme } = useThemeContext();

  const styles = {
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#222',
    color: theme === 'light' ? '#333' : '#fff',
  };

  return (
    <main style={styles} className="main-container">
      <h1 className="titulo">Nuestro Equipo</h1>
      <div className="container">
        {dentists.map((dentista) => (
          <Card key={dentista.id} dentista={dentista} />
        ))}
      </div>
    </main>
  );
};

export default Home;
