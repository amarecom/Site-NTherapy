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
            <h4>📍 Adresse</h4>
            <p>123 Rue de la Santé, 75000 Paris</p>
          </div>
          <div className="info-item">
            <h4>📞 Téléphone</h4>
            <p>01 23 45 67 89</p>
          </div>
          <div className="info-item">
            <h4>⏰ Horaires</h4>
            <p>Lundi - Vendredi : 08:00 - 20:00</p>
            <p>Samedi : 09:00 - 13:00</p>
          </div>
          <div className="info-item">
            <h4>🚆 Accès</h4>
            <p>Métro Ligne 4 - Station Alésia</p>
            <p>Bus 62, 38</p>
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
