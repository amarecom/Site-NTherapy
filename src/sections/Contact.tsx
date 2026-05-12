import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact section-padding">
    <div className="container">
      <AnimatedSection>
        <div className="section-header">
          <h2>Infos Pratiques<span>.</span></h2>
          <p>Retrouvez toutes les informations pour nous contacter.</p>
        </div>
      </AnimatedSection>
      <div className="contact-grid">
        <AnimatedSection direction="left" delay={0.1}>
          <div className="contact-info">
            <div className="info-item">
              <h4>📍 Localisation</h4>
              <p>Paris, Île-de-France</p>
            </div>
            <div className="info-item">
              <h4>📱 Instagram</h4>
              <p>
                <a href="https://www.instagram.com/n_therapy._" target="_blank" rel="noreferrer" style={{color: 'var(--color-accent-light)'}}>
                  @n_therapy._
                </a>
              </p>
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
        </AnimatedSection>
        <AnimatedSection direction="right" delay={0.2}>
          <div className="contact-map">
            <div className="map-placeholder">
              <span>Carte (Google Maps)</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default Contact;
