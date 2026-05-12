import type { FC } from 'react';
import './About.css';

const About: FC = () => {
  return (
    <section id="about" className="about section-padding container">
      <div className="about-grid">
        <div className="about-visual">
          <div className="profile-placeholder">
            <span>Photo de l'ostéopathe</span>
          </div>
        </div>
        <div className="about-text">
          <h2>À propos de NTherapy<span>.</span></h2>
          <h3>Votre Ostéopathe D.O.</h3>
          <p>
            Diplômé d'une école agréée par le Ministère de la Santé, je pratique une ostéopathie exclusive, douce et adaptée à chaque patient.
          </p>
          <p>
            Mon approche repose sur une compréhension globale du corps humain, visant à identifier la cause des douleurs plutôt que de simplement traiter les symptômes. Que vous soyez sportif, sédentaire, enfant ou senior, je vous accompagne pour retrouver votre vitalité.
          </p>
          <ul className="expertise-list">
            <li>✅ Expertise en biomécanique</li>
            <li>✅ Approche tissulaire et crânienne</li>
            <li>✅ Suivi personnalisé post-opératoire</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
