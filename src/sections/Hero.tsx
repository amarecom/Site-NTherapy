import type { FC } from 'react';
import './Hero.css';

const Hero: FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Retrouvez votre équilibre avec l'Ostéopathie<span>.</span></h1>
          <p>
            Soins personnalisés et approche humaine pour soulager vos douleurs et améliorer votre bien-être au quotidien.
          </p>
          <div className="hero-actions">
            <a href="#booking" className="btn btn-action">Prendre Rendez-vous</a>
            <a href="#services" className="btn btn-outline">Nos Services</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="abstract-shape"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
