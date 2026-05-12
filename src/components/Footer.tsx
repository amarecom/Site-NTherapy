'use client';

import Link from 'next/link';

const Footer = () => (
  <footer style={{
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text)',
    padding: '4rem 0 2rem',
    borderTop: '1px solid var(--color-border)',
  }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
      <div style={{ maxWidth: '280px' }}>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--color-white)', letterSpacing: '-0.02em' }}>
          Soul<span style={{ color: 'var(--color-accent)' }}>Cars</span>
        </h3>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
          Location de voitures premium et de prestige. Profitez de l&apos;excellence automobile sans concession.
        </p>
      </div>

      <div>
        <h4 style={{ marginBottom: '1.25rem', color: 'var(--color-text)', fontFamily: 'var(--font-headings)', fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Navigation</h4>
        <ul style={{ display: 'grid', gap: '0.75rem' }}>
          {([
            ['/', 'Accueil'],
            ['/voitures', 'Nos Voitures'],
            ['/reservation', 'Réservation'],
            ['/contact', 'Contact'],
          ] as [string, string][]).map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                style={{ color: 'var(--color-text-muted)', transition: 'color 0.25s', fontSize: '0.95rem' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={{ marginBottom: '1.25rem', color: 'var(--color-text)', fontFamily: 'var(--font-headings)', fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Catégories</h4>
        <ul style={{ display: 'grid', gap: '0.75rem' }}>
          {(['Berlines', 'SUV', 'Sportives', 'Cabriolets', 'Utilitaires'] as string[]).map(cat => (
            <li key={cat}>
              <Link
                href={`/voitures?category=${cat.toLowerCase()}`}
                style={{ color: 'var(--color-text-muted)', transition: 'color 0.25s', fontSize: '0.95rem' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 style={{ marginBottom: '1.25rem', color: 'var(--color-text)', fontFamily: 'var(--font-headings)', fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Contact</h4>
        <ul style={{ display: 'grid', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
          <li>📍 Paris, France</li>
          <li>
            <a href="tel:+33600000000" style={{ color: 'var(--color-text-muted)' }}>📞 +33 6 00 00 00 00</a>
          </li>
          <li>
            <a href="mailto:contact@soulcars.fr" style={{ color: 'var(--color-text-muted)' }}>✉️ contact@soulcars.fr</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="container" style={{
      paddingTop: '2rem',
      borderTop: '1px solid var(--color-border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      color: 'var(--color-text-muted)',
      fontSize: '0.875rem',
    }}>
      <span>&copy; {new Date().getFullYear()} SoulCars — Tous droits réservés.</span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/admin" style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', opacity: 0.5 }}>Admin</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
