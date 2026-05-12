import AnimatedSection from '../components/AnimatedSection';
import About from '../sections/About';
import Testimonials from '../sections/Testimonials';
import './Page.css';

const AboutPage = () => (
  <div className="page-wrapper">
    <AnimatedSection>
      <div className="page-hero">
        <h1>À Propos<span>.</span></h1>
        <p>Thérapeute manuel basé à Paris, spécialisé en cupping, massage et thérapie manuelle.</p>
      </div>
    </AnimatedSection>
    <About />
    <Testimonials />
  </div>
);

export default AboutPage;
