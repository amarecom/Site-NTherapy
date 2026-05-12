import AnimatedSection from '../components/AnimatedSection';
import Contact from '../sections/Contact';
import './Page.css';

const ContactPage = () => (
  <div className="page-wrapper">
    <AnimatedSection>
      <div className="page-hero">
        <h1>Contact<span>.</span></h1>
        <p>Retrouvez toutes les infos pratiques pour prendre rendez-vous ou nous contacter.</p>
      </div>
    </AnimatedSection>
    <Contact />
  </div>
);

export default ContactPage;
