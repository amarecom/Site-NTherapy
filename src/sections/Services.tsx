import AnimatedSection from '../components/AnimatedSection';
import './Services.css';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Cupping Therapy",
    description: "Technique ancestrale par ventouses pour libérer les tensions musculaires, améliorer la circulation et accélérer la récupération.",
    icon: "🫧"
  },
  {
    title: "Massage Thérapeutique",
    description: "Massages ciblés pour soulager les douleurs chroniques, réduire le stress et restaurer la mobilité.",
    icon: "🤲"
  },
  {
    title: "Thérapie Manuelle",
    description: "Techniques manuelles précises pour traiter les dysfonctions articulaires, musculaires et tissulaires.",
    icon: "💆"
  },
  {
    title: "Récupération Sportive",
    description: "Accompagnement des sportifs pour optimiser les performances et accélérer la récupération après effort.",
    icon: "🏃"
  }
];

const Services = () => (
  <section id="services" className="services section-padding">
    <div className="container">
      <AnimatedSection>
        <div className="section-header">
          <h2>Nos Services<span>.</span></h2>
          <p>Cupping therapy, massage et thérapie manuelle — des soins sur-mesure à Paris.</p>
        </div>
      </AnimatedSection>
      <div className="services-grid">
        {services.map((service, index) => (
          <AnimatedSection key={index} delay={index * 0.1} direction="up">
            <div className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
