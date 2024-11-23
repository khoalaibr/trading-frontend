import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido a la Aplicación de Trading</h1>
      <Link to="/signals" className="button button--primary">
        Ir a Señales
      </Link>
    </div>
  );
};

export default Home;
