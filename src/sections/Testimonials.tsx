import AnimatedSection from '@/components/AnimatedSection';
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
    text: "Première séance réussie. Les explications sont claires et les soins de qualité.",
    rating: 4
  }
];

const Testimonials = () => (
  <section className="testimonials section-padding">
    <div className="container">
      <AnimatedSection>
        <div className="section-header">
          <h2>Témoignages<span>.</span></h2>
          <p>Ce que nos patients disent de nous.</p>
        </div>
      </AnimatedSection>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.12} direction="up">
            <div className="testimonial-card">
              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-footer">
                <strong>{t.name}</strong>
                <div className="stars">{"★".repeat(t.rating)}</div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
