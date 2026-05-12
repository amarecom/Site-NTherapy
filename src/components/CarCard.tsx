'use client';

import Link from 'next/link';
import type { Car } from '@/data/cars';
import { STATUS_LABELS, FUEL_LABELS } from '@/data/cars';

interface CarCardProps {
  car: Car;
  overrideStatus?: import('@/data/cars').CarStatus;
}

const CATEGORY_ICONS: Record<string, string> = {
  berline: '🚗',
  suv: '🚙',
  sportive: '🏎️',
  cabriolet: '🚘',
  utilitaire: '🚐',
};

const CarCard = ({ car, overrideStatus }: CarCardProps) => {
  const status = overrideStatus ?? car.status;
  const isAvailable = status === 'available';

  return (
    <article style={{
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(212,168,83,0.12)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Image placeholder */}
      <div style={{
        height: '200px',
        background: 'linear-gradient(135deg, var(--color-surface-2) 0%, #1f1a10 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <span style={{ fontSize: '5rem', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}>
          {CATEGORY_ICONS[car.category] ?? '🚗'}
        </span>
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
        }}>
          <span className={`badge badge-${status}`}>
            {status === 'available' ? '●' : status === 'reserved' ? '◐' : '○'} {STATUS_LABELS[status]}
          </span>
        </div>
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          padding: '0.25rem 0.6rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem',
          color: 'var(--color-text-muted)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {car.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            {car.brand}
          </p>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--color-white)', marginBottom: '0.5rem' }}>{car.name}</h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{car.description}</p>
        </div>

        {/* Specs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
          {[
            { icon: '👥', value: `${car.seats} places` },
            { icon: '⚡', value: FUEL_LABELS[car.fuel] },
            { icon: '⚙️', value: car.transmission === 'automatique' ? 'Auto' : 'Manuelle' },
          ].map(({ icon, value }) => (
            <div key={value} style={{
              background: 'var(--color-surface-2)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.5rem',
              textAlign: 'center',
              fontSize: '0.8rem',
              color: 'var(--color-text-muted)',
            }}>
              <span>{icon}</span>
              <p style={{ marginTop: '0.2rem', fontSize: '0.75rem' }}>{value}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {car.features.slice(0, 3).map(f => (
            <span key={f} style={{
              background: 'rgba(212,168,83,0.08)',
              border: '1px solid rgba(212,168,83,0.15)',
              color: 'var(--color-accent)',
              borderRadius: 'var(--radius-full)',
              padding: '0.2rem 0.6rem',
              fontSize: '0.75rem',
            }}>
              {f}
            </span>
          ))}
          {car.features.length > 3 && (
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', padding: '0.2rem 0.4rem' }}>
              +{car.features.length - 3}
            </span>
          )}
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
          <div>
            <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-white)', fontFamily: 'var(--font-headings)' }}>
              {car.pricePerDay}€
            </span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}> / jour</span>
          </div>

          {isAvailable ? (
            <Link
              href={`/reservation?car=${car.id}`}
              className="btn btn-primary"
              style={{ fontSize: '0.875rem', padding: '0.6rem 1.2rem' }}
            >
              Réserver
            </Link>
          ) : (
            <button
              disabled
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--color-surface-2)',
                color: 'var(--color-text-muted)',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'not-allowed',
              }}
            >
              Indisponible
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default CarCard;
