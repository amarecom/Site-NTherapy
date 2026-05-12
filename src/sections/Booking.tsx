import type { FC } from 'react';
import './Booking.css';

const Booking: FC = () => {
  return (
    <section id="booking" className="booking section-padding">
      <div className="container">
        <div className="booking-header">
          <h2>Prendre Rendez-vous</h2>
          <p>
            Choisissez un créneau disponible. Votre demande me sera envoyée par email
            et je vous confirmerai le rendez-vous dans les plus brefs délais.
          </p>
        </div>

        <div className="booking-body">
          <div className="booking-info">
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <div>
                <h4>Durée</h4>
                <p>Séance de 45 à 60 min</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <h4>Lieu</h4>
                <p>Cabinet ou domicile</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">✅</div>
              <div>
                <h4>Confirmation</h4>
                <p>Par email sous 24h</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">❌</div>
              <div>
                <h4>Annulation</h4>
                <p>Libre jusqu'à 24h avant</p>
              </div>
            </div>
          </div>

          <div className="calendar-wrapper">
            <div className="calendar-placeholder">
              <div className="calendar-placeholder-inner">
                <div className="cal-icon">📅</div>
                <h3>Calendrier de réservation</h3>
                <p>
                  Pour activer votre calendrier, créez un compte gratuit sur{' '}
                  <a href="https://cal.com" target="_blank" rel="noreferrer">
                    cal.com
                  </a>{' '}
                  puis remplacez <code>votre-identifiant</code> dans le code
                  par votre nom d'utilisateur Cal.com.
                </p>
                <a
                  href="https://cal.com/signup"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cal"
                >
                  Créer mon compte Cal.com gratuitement →
                </a>
              </div>
            </div>

            {/*
              Une fois votre compte Cal.com créé :
              1. Remplacez la div "calendar-placeholder" ci-dessus par :

              <iframe
                src="https://cal.com/VOTRE-IDENTIFIANT?embed=true"
                frameBorder="0"
                width="100%"
                height="700"
                title="Calendrier de réservation NTherapy"
              />

              2. Remplacez VOTRE-IDENTIFIANT par votre username Cal.com
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
