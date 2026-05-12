import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import './Testimonials.css';

const testimonials = [
  {
    name: "Jkitoubilel",
    role: "Champion WBC",
    text: "J'me suis endormi carrément tellement c'était relaxant. Soins au top, je recommande.",
    photo: "/photos/testi-wbc.jpg",
    rating: 5
  },
  {
    name: "Mozane Malivert",
    role: "Combattant MMA",
    text: "Séance top avant le combat. Objectif relâchement musculaire et élimination des toxines — mission accomplie.",
    photo: "/photos/testi-combat.jpg",
    rating: 5
  },
  {
    name: "Wesley Jobello",
    role: "Footballeur professionnel",
    text: "Ce fut un plaisir, soins de qualité. Je reviendrai sans hésiter.",
    photo: "/photos/testi-wesley.jpg",
    rating: 5
  },
  {
    name: "Montanna Flo",
    role: "Athlète de compétition",
    text: "Passé au cabinet pour préparer ma compétition. Douleurs adducteurs, psoas, bassin traités avec précision. Merci !",
    photo: "/photos/testi-montanna.jpg",
    rating: 5
  }
];

const Testimonials = () => (
  <section className="testimonials section-padding">
    <div className="container">
      <AnimatedSection>
        <div className="section-header">
          <h2>Ils nous font confiance<span>.</span></h2>
          <p>Sportifs, combattants, champions — N_Therapy accompagne les meilleurs.</p>
        </div>
      </AnimatedSection>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.12} direction="up">
            <div className="testimonial-card">
              <div className="testimonial-photo-wrap">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={300}
                  height={200}
                  className="testimonial-photo"
                />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-footer">
                  <div>
                    <strong>{t.name}</strong>
                    <span className="testimonial-role">{t.role}</span>
                  </div>
                  <div className="stars">{"★".repeat(t.rating)}</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
