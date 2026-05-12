'use client';

import Link from 'next/link';

const Footer = () => (
  <footer style={{backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', padding: '4rem 0', borderTop: '1px solid var(--color-border)'}}>
    <div className="container" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem'}}>
      <div style={{maxWidth: '300px'}}>
        <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-white)'}}>
          N_Therapy<span style={{color: 'var(--color-accent)'}}>.</span>
        </h3>
        <p style={{color: 'var(--color-text-muted)'}}>Cupping therapy, massage et thérapie manuelle à Paris. Prenez soin de vous.</p>
      </div>
      <div>
        <h4 style={{marginBottom: '1rem', color: 'var(--color-text)'}}>Navigation</h4>
        <ul style={{display: 'grid', gap: '0.5rem'}}>
          {([['/', 'Accueil'], ['/services', 'Services'], ['/a-propos', 'À Propos'], ['/reservation', 'Réservation'], ['/contact', 'Contact']] as [string, string][]).map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                style={{color: 'var(--color-text-muted)', transition: 'color 0.25s'}}
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
        <h4 style={{marginBottom: '1rem', color: 'var(--color-text)'}}>Suivez-nous</h4>
        <a href="https://www.instagram.com/n_therapy._" target="_blank" rel="noreferrer" style={{color: 'var(--color-accent-light)', fontWeight: 600}}>@n_therapy._</a>
      </div>
    </div>
    <div className="container" style={{marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem'}}>
      &copy; {new Date().getFullYear()} N_Therapy — Tous droits réservés.
    </div>
  </footer>
);

export default Footer;
