'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/a-propos', label: 'À Propos' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (to: string) => {
    if (to === '/') return pathname === '/';
    return pathname.startsWith(to);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link href="/" className="logo">
          N_Therapy<span>.</span>
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

        <Link href="/reservation" className="btn btn-primary">Réserver</Link>

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
            <Link href="/reservation" className="btn btn-primary" onClick={() => setOpen(false)}>
              Réserver
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
