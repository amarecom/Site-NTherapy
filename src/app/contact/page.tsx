'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

// Note: metadata export doesn't work in 'use client' files, moved to separate config
// export const metadata: Metadata = { ... };

const CONTACT_INFO = [
  { icon: '📍', label: 'Adresse', value: 'Paris, Île-de-France' },
  { icon: '📞', label: 'Téléphone', value: '+33 6 00 00 00 00', href: 'tel:+33600000000' },
  { icon: '✉️', label: 'Email', value: 'contact@soulcars.fr', href: 'mailto:contact@soulcars.fr' },
  { icon: '🕐', label: 'Horaires', value: 'Lun–Sam · 8h–20h' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to your email service or API here
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--color-surface-2)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-sm)',
    padding: '0.75rem 1rem',
    color: 'var(--color-text)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.25s',
    fontFamily: 'var(--font-main)',
  };

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
            Contact
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            Parlons-nous
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            Une question sur un véhicule, un tarif ou une réservation ? Notre équipe vous répond sous 2h.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>
          {/* Form */}
          <div>
            {submitted ? (
              <div style={{
                background: 'rgba(76,175,80,0.08)',
                border: '1px solid rgba(76,175,80,0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem',
                textAlign: 'center',
              }}>
                <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</p>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-white)' }}>Message envoyé !</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  Nous vous répondrons dans les plus brefs délais.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Jean Dupont"
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+33 6 00 00 00 00"
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="jean@example.com"
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                    Sujet
                  </label>
                  <select
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="reservation">Question sur une réservation</option>
                    <option value="tarif">Demande de tarif</option>
                    <option value="vehicule">Renseignement sur un véhicule</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Votre message…"
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', fontSize: '1rem', padding: '0.875rem 2rem' }}>
                  Envoyer le message →
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.75rem',
            }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--color-white)' }}>Nos coordonnées</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {CONTACT_INFO.map(({ icon, label, value, href }) => (
                  <li key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{icon}</span>
                    <div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.15rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                        {label}
                      </p>
                      {href ? (
                        <a href={href} style={{ color: 'var(--color-accent)', fontSize: '0.95rem', fontWeight: 500 }}>{value}</a>
                      ) : (
                        <p style={{ color: 'var(--color-text)', fontSize: '0.95rem' }}>{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: 'rgba(212,168,83,0.06)',
              border: '1px solid rgba(212,168,83,0.2)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              textAlign: 'center',
            }}>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.7 }}>
                Vous souhaitez réserver directement ?
              </p>
              <Link href="/reservation" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}>
                Accéder au calendrier
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > .container { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
