import type { FC } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Sophie L.",
    text: "Une séance très efficace pour mes douleurs cervicales. Professionnel et à l'écoute.",
    rating: 5
  },
  {
    name: "Thomas M.",
    text: "Accompagnement parfait pour ma reprise du sport après une blessure au genou.",
    rating: 5
  },
  {
    name: "Marc D.",
    text: "Première séance d'ostéopathie réussie. Les explications sont claires et les soins de qualité.",
    rating: 4
  }
];

const Testimonials: FC = () => {
  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Témoignages<span>.</span></h2>
          <p>Ce que nos patients disent de nous.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-footer">
                <strong>{t.name}</strong>
                <div className="stars">{"★".repeat(t.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
