'use client';

import { useState, useEffect } from 'react';
import { CARS, STATUS_LABELS, FUEL_LABELS, type CarStatus } from '@/data/cars';

const ADMIN_PASSWORD = 'soulcars2024';

const STATUS_OPTIONS: { value: CarStatus; label: string; color: string }[] = [
  { value: 'available', label: 'Disponible', color: '#4caf50' },
  { value: 'reserved', label: 'Réservée', color: '#ff9800' },
  { value: 'unavailable', label: 'Indisponible', color: '#f44336' },
];

export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [overrides, setOverrides] = useState<Record<string, CarStatus>>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('soulcars_status_overrides');
      if (stored) setOverrides(JSON.parse(stored));
      const authed = sessionStorage.getItem('soulcars_admin');
      if (authed === '1') setAuth(true);
    } catch { /* ignore */ }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuth(true);
      sessionStorage.setItem('soulcars_admin', '1');
      setError('');
    } else {
      setError('Mot de passe incorrect.');
    }
  };

  const handleStatusChange = (carId: string, status: CarStatus) => {
    setOverrides(prev => ({ ...prev, [carId]: status }));
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem('soulcars_status_overrides', JSON.stringify(overrides));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = (carId: string) => {
    setOverrides(prev => {
      const next = { ...prev };
      delete next[carId];
      return next;
    });
    setSaved(false);
  };

  const handleResetAll = () => {
    setOverrides({});
    localStorage.removeItem('soulcars_status_overrides');
    setSaved(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('soulcars_admin');
    setAuth(false);
  };

  if (!auth) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg)',
        padding: '2rem',
      }}>
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          width: '100%',
          maxWidth: '400px',
        }}>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '0.5rem', color: 'var(--color-white)' }}>
            Soul<span style={{ color: 'var(--color-accent)' }}>Cars</span> Admin
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            Accès réservé à l&apos;équipe SoulCars.
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: '100%',
                  background: 'var(--color-surface-2)',
                  border: `1px solid ${error ? '#f44336' : 'var(--color-border)'}`,
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.75rem 1rem',
                  color: 'var(--color-text)',
                  fontSize: '1rem',
                  outline: 'none',
                  fontFamily: 'var(--font-main)',
                }}
              />
              {error && <p style={{ color: '#f44336', fontSize: '0.8rem', marginTop: '0.4rem' }}>{error}</p>}
            </div>
            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
              Connexion
            </button>
          </form>
        </div>
      </div>
    );
  }

  const availableCount = CARS.filter(c => (overrides[c.id] ?? c.status) === 'available').length;
  const reservedCount = CARS.filter(c => (overrides[c.id] ?? c.status) === 'reserved').length;
  const unavailableCount = CARS.filter(c => (overrides[c.id] ?? c.status) === 'unavailable').length;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Header */}
      <section style={{
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        padding: '1.5rem 0',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-white)' }}>
              Soul<span style={{ color: 'var(--color-accent)' }}>Cars</span> — Gestion des disponibilités
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              {availableCount} dispo · {reservedCount} réservées · {unavailableCount} indisponibles
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {saved && (
              <span style={{ color: '#4caf50', fontSize: '0.875rem', fontWeight: 600 }}>✅ Enregistré !</span>
            )}
            <button onClick={handleResetAll} className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
              Réinitialiser tout
            </button>
            <button onClick={handleSave} className="btn btn-primary" style={{ fontSize: '0.875rem', padding: '0.6rem 1.4rem' }}>
              Enregistrer
            </button>
            <button onClick={handleLogout} style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', padding: '0.5rem', background: 'none', cursor: 'pointer' }}>
              Déconnexion
            </button>
          </div>
        </div>
      </section>

      {/* Car List */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {CARS.map(car => {
              const currentStatus = overrides[car.id] ?? car.status;
              const isOverridden = car.id in overrides;

              return (
                <div key={car.id} style={{
                  background: 'var(--color-surface)',
                  border: `1px solid ${isOverridden ? 'rgba(212,168,83,0.3)' : 'var(--color-border)'}`,
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1.5rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '1rem',
                  alignItems: 'center',
                }}>
                  {/* Car info */}
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ minWidth: '200px' }}>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>
                        {car.brand}
                      </p>
                      <p style={{ fontWeight: 700, color: 'var(--color-white)', fontSize: '1rem' }}>{car.name}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
                      <span style={{ textTransform: 'capitalize' }}>{car.category}</span>
                      <span>{FUEL_LABELS[car.fuel]}</span>
                      <span>{car.seats} places</span>
                      <span style={{ fontWeight: 600, color: 'var(--color-accent)' }}>{car.pricePerDay}€/j</span>
                    </div>
                    {isOverridden && (
                      <span style={{
                        fontSize: '0.75rem',
                        background: 'rgba(212,168,83,0.1)',
                        color: 'var(--color-accent)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(212,168,83,0.2)',
                      }}>
                        Modifié
                      </span>
                    )}
                  </div>

                  {/* Status controls */}
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    {STATUS_OPTIONS.map(({ value, label, color }) => (
                      <button
                        key={value}
                        onClick={() => handleStatusChange(car.id, value)}
                        style={{
                          padding: '0.4rem 0.9rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          border: `1.5px solid ${currentStatus === value ? color : 'transparent'}`,
                          background: currentStatus === value ? `${color}20` : 'var(--color-surface-2)',
                          color: currentStatus === value ? color : 'var(--color-text-muted)',
                          transition: 'all 0.2s',
                        }}
                      >
                        {label}
                      </button>
                    ))}
                    {isOverridden && (
                      <button
                        onClick={() => handleReset(car.id)}
                        title="Réinitialiser au statut d'origine"
                        style={{
                          padding: '0.4rem 0.6rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.75rem',
                          color: 'var(--color-text-muted)',
                          background: 'var(--color-surface-2)',
                          cursor: 'pointer',
                        }}
                      >
                        ↩
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Save button bottom */}
          <div style={{ textAlign: 'right', marginTop: '2rem' }}>
            <button onClick={handleSave} className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2.5rem' }}>
              Enregistrer les modifications
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          section > .container > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
