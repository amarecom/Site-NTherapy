'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CARS, CATEGORIES, STATUSES, type CarCategory, type CarStatus } from '@/data/cars';
import CarCard from '@/components/CarCard';

function VoituresContent() {
  const searchParams = useSearchParams();
  const [categoryFilter, setCategoryFilter] = useState<CarCategory | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<CarStatus | 'all'>('all');
  const [search, setSearch] = useState('');
  const [overrides, setOverrides] = useState<Record<string, CarStatus>>({});

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategoryFilter(cat as CarCategory | 'all');
    try {
      const saved = localStorage.getItem('soulcars_status_overrides');
      if (saved) setOverrides(JSON.parse(saved));
    } catch { /* ignore */ }
  }, [searchParams]);

  const filtered = useMemo(() => {
    return CARS.filter(car => {
      const status = overrides[car.id] ?? car.status;
      if (categoryFilter !== 'all' && car.category !== categoryFilter) return false;
      if (statusFilter !== 'all' && status !== statusFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          car.brand.toLowerCase().includes(q) ||
          car.name.toLowerCase().includes(q) ||
          car.category.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [categoryFilter, statusFilter, search, overrides]);

  const availableCount = CARS.filter(c => (overrides[c.id] ?? c.status) === 'available').length;

  return (
    <>
      {/* Header */}
      <section style={{
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        padding: '3rem 0 2rem',
      }}>
        <div className="container">
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Notre Flotte
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            {availableCount} véhicules disponibles
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
            Filtrez par catégorie, carburant ou disponibilité pour trouver votre véhicule idéal.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{
        position: 'sticky',
        top: '0',
        zIndex: 100,
        background: 'rgba(8,8,8,0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--color-border)',
        padding: '1rem 0',
      }}>
        <div className="container" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Search */}
          <input
            type="text"
            placeholder="Rechercher (marque, modèle…)"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-full)',
              padding: '0.55rem 1.2rem',
              color: 'var(--color-text)',
              fontSize: '0.875rem',
              width: '220px',
              outline: 'none',
              transition: 'border-color 0.25s',
              fontFamily: 'var(--font-main)',
            }}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
          />

          {/* Category filter */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {CATEGORIES.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setCategoryFilter(value as CarCategory | 'all')}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  border: `1px solid ${categoryFilter === value ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  background: categoryFilter === value ? 'rgba(212,168,83,0.15)' : 'transparent',
                  color: categoryFilter === value ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as CarStatus | 'all')}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-full)',
              padding: '0.55rem 1rem',
              color: 'var(--color-text)',
              fontSize: '0.875rem',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-main)',
            }}
          >
            {STATUSES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-muted)' }}>
              <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</p>
              <p style={{ fontSize: '1.1rem' }}>Aucun véhicule ne correspond à votre recherche.</p>
              <button
                onClick={() => { setCategoryFilter('all'); setStatusFilter('all'); setSearch(''); }}
                className="btn btn-outline"
                style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                {filtered.length} véhicule{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
              }}>
                {filtered.map(car => (
                  <CarCard key={car.id} car={car} overrideStatus={overrides[car.id]} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default function VoituresPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}>
        Chargement…
      </div>
    }>
      <VoituresContent />
    </Suspense>
  );
}
