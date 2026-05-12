import Link from 'next/link';
import type { Metadata } from 'next';
import { CARS } from '@/data/cars';
import CarCard from '@/components/CarCard';

export const metadata: Metadata = {
  title: 'SoulCars — Location de voitures premium',
  description: 'Louez la voiture de vos rêves avec SoulCars. Berlines, SUV, sportives et cabriolets disponibles à la réservation en ligne.',
};

const STATS = [
  { value: '50+', label: 'Véhicules premium' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '24/7', label: 'Service disponible' },
  { value: '5★', label: 'Note moyenne' },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Choisissez votre voiture', desc: 'Parcourez notre flotte et sélectionnez le véhicule qui correspond à vos envies et votre budget.' },
  { step: '02', title: 'Réservez en ligne', desc: 'Choisissez vos dates via notre système de réservation cal.com simple et rapide, disponible 24h/24.' },
  { step: '03', title: 'Prenez le volant', desc: 'Récupérez votre véhicule et profitez de l\'expérience de conduite premium que vous méritez.' },
];

export default function HomePage() {
  const featuredCars = CARS.filter(c => c.status === 'available').slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,168,83,0.08) 0%, transparent 70%)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(212,168,83,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '760px' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(212,168,83,0.1)',
              border: '1px solid rgba(212,168,83,0.25)',
              color: 'var(--color-accent)',
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              Location Premium
            </span>

            <h1 style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              Conduisez vos<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-light))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                rêves.
              </span>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-muted)',
              maxWidth: '560px',
              marginBottom: '2.5rem',
              lineHeight: 1.75,
            }}>
              De la berline élégante à la supercar iconique — SoulCars vous ouvre les portes de l&apos;excellence automobile. Réservation simple, livraison rapide.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/voitures" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                Voir notre flotte →
              </Link>
              <Link href="/reservation" className="btn btn-outline" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                Réserver maintenant
              </Link>
            </div>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          right: '-5%',
          bottom: '10%',
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          opacity: 0.04,
          userSelect: 'none',
          pointerEvents: 'none',
          transform: 'scaleX(-1)',
        }}>
          🏎️
        </div>
      </section>

      {/* Stats */}
      <section style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '3rem 0',
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '2rem',
          textAlign: 'center',
        }}>
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 900,
                fontFamily: 'var(--font-headings)',
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-light))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}>{value}</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cars */}
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Véhicules <span className="gold-text">disponibles</span></h2>
            <p>Découvrez notre sélection de véhicules premium prêts à partir.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}>
            {featuredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/voitures" className="btn btn-outline" style={{ padding: '0.875rem 2.5rem', fontSize: '1rem' }}>
              Voir toute la flotte ({CARS.length} véhicules)
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Comment ça <span className="gold-text">fonctionne</span></h2>
            <p>Louer une voiture n&apos;a jamais été aussi simple.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}>
            {HOW_IT_WORKS.map(({ step, title, desc }) => (
              <div key={step} style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <span style={{
                  position: 'absolute',
                  top: '-0.5rem',
                  right: '1.5rem',
                  fontSize: '4rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-headings)',
                  color: 'rgba(212,168,83,0.08)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>
                  {step}
                </span>
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  background: 'linear-gradient(135deg, var(--color-action), var(--color-accent))',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: '#000',
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-headings)',
                }}>
                  {step}
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--color-white)' }}>{title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--color-surface) 0%, rgba(212,168,83,0.05) 100%)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(2rem, 5vw, 4rem)',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '1rem' }}>
              Prêt à prendre le <span className="gold-text">volant</span> ?
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              Réservez votre véhicule en ligne en moins de 2 minutes grâce à notre système de réservation intégré.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/reservation" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2.5rem' }}>
                Réserver maintenant
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}>
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
