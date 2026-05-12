import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import './App.css';

const pageVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/reservation" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

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
          {[['/', 'Accueil'], ['/services', 'Services'], ['/a-propos', 'À Propos'], ['/reservation', 'Réservation'], ['/contact', 'Contact']].map(([href, label]) => (
            <li key={href}><a href={href} style={{color: 'var(--color-text-muted)', transition: 'color 0.25s'}} onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-light)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>{label}</a></li>
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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
