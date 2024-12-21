import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido al portfolio de Lucia Fontalba</h1>
      <p>Explora las diferentes secciones de nuestra web:</p>
      <div className="sections">
        <div className="section">
          <h2>Sobre Nosotros</h2>
          <p>Conoce más acerca de mi misión y visión.</p>
          <Link to="/about" className="section-link">About</Link>
        </div>
        <div className="section">
          <h2>Contacto</h2>
          <p>¿Tienes preguntas? Contactame aquí.               |||</p>
          <Link to="/contacts" className="section-link">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

