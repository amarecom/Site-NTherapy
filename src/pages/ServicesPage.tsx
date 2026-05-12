import AnimatedSection from '../components/AnimatedSection';
import Services from '../sections/Services';
import './Page.css';

const ServicesPage = () => (
  <div className="page-wrapper">
    <AnimatedSection>
      <div className="page-hero">
        <h1>Nos Services<span>.</span></h1>
        <p>Cupping therapy, massage et thérapie manuelle — des soins pensés pour vous à Paris.</p>
      </div>
    </AnimatedSection>
    <Services />
  </div>
);

export default ServicesPage;
