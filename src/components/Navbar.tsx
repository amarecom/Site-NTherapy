'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/voitures', label: 'Nos Voitures' },
  { to: '/reservation', label: 'Réservation' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (to: string) => {
    if (to === '/') return pathname === '/';
    return pathname.startsWith(to);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link href="/" className="logo">
          Soul<span>Cars</span>
        </Link>

        <ul className="nav-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link href={to} className={isActive(to) ? 'active' : ''}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/voitures" className="btn btn-primary nav-cta">Louer maintenant</Link>

        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(({ to, label }) => (
              <Link
                key={to}
                href={to}
                className={isActive(to) ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link href="/voitures" className="btn btn-primary" onClick={() => setOpen(false)}>
              Louer maintenant
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
