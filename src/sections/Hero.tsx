import type { FC } from 'react';
import './Hero.css';

const Hero: FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Cupping, Massage & Thérapie Manuelle à Paris<span>.</span></h1>
          <p>
            Soulagez vos douleurs et retrouvez votre bien-être grâce à des soins personnalisés au cœur de Paris, Île-de-France.
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
