import { useEffect, type FC } from 'react';
import './Booking.css';

const Booking: FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => {
      (window as any).Cal?.('init', { origin: 'https://app.cal.com' });
      (window as any).Cal?.('inline', {
        elementOrSelector: '#cal-embed',
        calLink: 'n.therapy',
        layout: 'month_view',
      });
    };
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

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
            <div id="cal-embed" style={{ width: '100%', minHeight: '700px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
