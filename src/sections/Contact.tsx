import type { FC } from 'react';
import './Contact.css';

const Contact: FC = () => {
  return (
    <section id="contact" className="contact section-padding container">
      <div className="section-header">
        <h2>Infos Pratiques<span>.</span></h2>
        <p>Retrouvez toutes les informations pour nous rendre visite.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-item">
            <h4>📍 Localisation</h4>
            <p>Paris, Île-de-France</p>
          </div>
          <div className="info-item">
            <h4>📱 Instagram</h4>
            <p><a href="https://www.instagram.com/n_therapy._" target="_blank" rel="noreferrer" style={{color: 'var(--color-accent-light)'}}>@n_therapy._</a></p>
          </div>
          <div className="info-item">
            <h4>📅 Réservation</h4>
            <p>Via le calendrier en ligne — confirmation sous 24h</p>
          </div>
          <div className="info-item">
            <h4>💆 Spécialités</h4>
            <p>Cupping Therapy · Massage · Thérapie Manuelle</p>
          </div>
        </div>
        <div className="contact-map">
          <div className="map-placeholder">
            <span>Carte (Google Maps)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
