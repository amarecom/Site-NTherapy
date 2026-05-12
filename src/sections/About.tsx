import AnimatedSection from '@/components/AnimatedSection';
import './About.css';

const About = () => (
  <section id="about" className="about section-padding">
    <div className="container">
      <div className="about-grid">
        <AnimatedSection direction="left">
          <div className="about-visual">
            <div className="profile-placeholder">
              <span>Photo du thérapeute</span>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <div className="about-text">
            <h2>À propos de N_Therapy<span>.</span></h2>
            <h3>Thérapeute Manuel — Paris, Île-de-France</h3>
            <p>
              Spécialisé en cupping therapy, massage et thérapie manuelle, j&apos;accompagne chaque patient avec une approche personnalisée et bienveillante au cœur de Paris.
            </p>
            <p>
              Mon objectif : identifier la source de vos douleurs et vous proposer des soins adaptés pour retrouver confort, mobilité et bien-être durablement — que vous soyez sportif, actif ou en rééducation.
            </p>
            <ul className="expertise-list">
              <li>✅ Cupping therapy & ventouses</li>
              <li>✅ Massage thérapeutique ciblé</li>
              <li>✅ Thérapie manuelle & mobilisations</li>
              <li>✅ Suivi sportif & récupération</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default About;
