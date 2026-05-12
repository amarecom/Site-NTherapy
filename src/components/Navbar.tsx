import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <NavLink to="/" className="logo">
          N_Therapy<span>.</span>
        </NavLink>

        <ul className="nav-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''} end={to === '/'}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/reservation" className="btn btn-primary">Réserver</NavLink>

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
              <NavLink key={to} to={to} onClick={() => setOpen(false)} end={to === '/'}>
                {label}
              </NavLink>
            ))}
            <NavLink to="/reservation" className="btn btn-primary" onClick={() => setOpen(false)}>
              Réserver
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
