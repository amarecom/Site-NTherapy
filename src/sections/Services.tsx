import type { FC } from 'react';
import './Services.css';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Ostéopathie Générale",
    description: "Traitement des troubles musculo-squelettiques, maux de dos et articulations.",
    icon: "🦴"
  },
  {
    title: "Ostéopathie du Sport",
    description: "Optimisation des performances et récupération après blessure.",
    icon: "🏃"
  },
  {
    title: "Pédiatrie & Nourrissons",
    description: "Soins doux pour accompagner la croissance et le bien-être des plus petits.",
    icon: "👶"
  },
  {
    title: "Femmes Enceintes",
    description: "Accompagnement tout au long de la grossesse pour soulager les tensions.",
    icon: "🤰"
  }
];

const Services: FC = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Nos Services<span>.</span></h2>
          <p>Une approche thérapeutique adaptée à chaque étape de votre vie.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
