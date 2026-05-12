'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CARS } from '@/data/cars';

function ReservationContent() {
  const searchParams = useSearchParams();
  const carId = searchParams.get('car');
  const car = carId ? CARS.find(c => c.id === carId) : null;

  const [calLink, setCalLink] = useState('soulcars/reservation');

  useEffect(() => {
    if (car) setCalLink(car.calLink);
  }, [car]);

  // Cal.com embed URL
  const calEmbedUrl = `https://cal.com/${calLink}?embed=true`;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Header */}
      <section style={{
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        padding: '3rem 0 2rem',
      }}>
        <div className="container">
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Réservation
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            {car ? `Réserver — ${car.brand} ${car.name}` : 'Choisissez vos dates'}
          </h1>
          {car && (
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
              À partir de <strong style={{ color: 'var(--color-accent)' }}>{car.pricePerDay}€/jour</strong>
              {' · '}{car.seats} places · {car.transmission} · {car.fuel}
            </p>
          )}
          {!car && (
            <p style={{ color: 'var(--color-text-muted)' }}>
              Sélectionnez un créneau disponible ci-dessous.{' '}
              <Link href="/voitures" style={{ color: 'var(--color-accent)' }}>
                Choisir un véhicule spécifique →
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* Cal.com embed */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', alignItems: 'start' }}>
            {/* Calendar embed */}
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              minHeight: '700px',
            }}>
              <iframe
                src={calEmbedUrl}
                style={{
                  width: '100%',
                  height: '700px',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                }}
                title="Calendrier de réservation SoulCars"
              />
            </div>

            {/* Info sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {car && (
                <div style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-white)' }}>Votre sélection</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--color-text-muted)' }}>Véhicule</span>
                      <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>{car.brand} {car.name}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--color-text-muted)' }}>Catégorie</span>
                      <span style={{ color: 'var(--color-text)', textTransform: 'capitalize' }}>{car.category}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--color-text-muted)' }}>Année</span>
                      <span style={{ color: 'var(--color-text)' }}>{car.year}</span>
                    </div>
                    <div style={{ height: '1px', background: 'var(--color-border)', margin: '0.25rem 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--color-text-muted)' }}>Tarif</span>
                      <span style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '1.1rem' }}>{car.pricePerDay}€/jour</span>
                    </div>
                  </div>
                </div>
              )}

              <div style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
              }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-white)' }}>Informations</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  {[
                    '✅ Confirmation immédiate',
                    '📍 Remise sur Paris & IDF',
                    '🔑 Livraison possible',
                    '📞 Support 7j/7',
                    '🛡️ Assurance incluse',
                  ].map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={{
                background: 'rgba(212,168,83,0.06)',
                border: '1px solid rgba(212,168,83,0.2)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
              }}>
                <strong style={{ color: 'var(--color-accent)', display: 'block', marginBottom: '0.5rem' }}>Besoin d&apos;aide ?</strong>
                Contactez-nous au{' '}
                <a href="tel:+33600000000" style={{ color: 'var(--color-accent)' }}>+33 6 00 00 00 00</a>
                {' '}ou par{' '}
                <Link href="/contact" style={{ color: 'var(--color-accent)' }}>email</Link>.
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .reservation-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

export default function ReservationPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}>
        Chargement…
      </div>
    }>
      <ReservationContent />
    </Suspense>
  );
}
