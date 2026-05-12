import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import Booking from './sections/Booking';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <footer style={{backgroundColor: 'var(--color-surface)', color: 'var(--color-text)', padding: '4rem 0', borderTop: '1px solid var(--color-border)'}}>
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem'}}>
          <div style={{maxWidth: '300px'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-white)'}}>N_Therapy<span style={{color: 'var(--color-accent)'}}>.</span></h3>
            <p style={{color: 'var(--color-text-muted)'}}>Cupping therapy, massage et thérapie manuelle à Paris. Prenez soin de vous.</p>
          </div>
          <div>
            <h4 style={{marginBottom: '1rem', color: 'var(--color-text)'}}>Navigation</h4>
            <ul style={{display: 'grid', gap: '0.5rem'}}>
              <li><a href="#home" style={{color: 'var(--color-text-muted)', transition: 'color 0.3s'}} onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-light)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>Accueil</a></li>
              <li><a href="#services" style={{color: 'var(--color-text-muted)', transition: 'color 0.3s'}} onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-light)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>Services</a></li>
              <li><a href="#about" style={{color: 'var(--color-text-muted)', transition: 'color 0.3s'}} onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-light)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>À Propos</a></li>
              <li><a href="#booking" style={{color: 'var(--color-text-muted)', transition: 'color 0.3s'}} onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-light)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>Réservation</a></li>
              <li><a href="#contact" style={{color: 'var(--color-text-muted)', transition: 'color 0.3s'}} onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent-light)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{marginBottom: '1rem', color: 'var(--color-text)'}}>Légal</h4>
            <ul style={{display: 'grid', gap: '0.5rem'}}>
              <li style={{color: 'var(--color-text-muted)'}}>Mentions Légales</li>
              <li style={{color: 'var(--color-text-muted)'}}>Politique de Confidentialité</li>
            </ul>
          </div>
        </div>
        <div className="container" style={{marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem'}}>
          &copy; {new Date().getFullYear()} NTherapy - Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

export default App;
