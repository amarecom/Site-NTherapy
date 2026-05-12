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
      <footer style={{backgroundColor: 'var(--color-secondary)', color: 'white', padding: '4rem 0'}}>
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem'}}>
          <div style={{maxWidth: '300px'}}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>NTherapy<span>.</span></h3>
            <p style={{opacity: 0.7}}>Ostéopathie exclusive pour tous les âges. Redonnez à votre corps sa capacité d'auto-guérison.</p>
          </div>
          <div>
            <h4 style={{marginBottom: '1rem'}}>Navigation</h4>
            <ul style={{display: 'grid', gap: '0.5rem', opacity: 0.7}}>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">À Propos</a></li>
              <li><a href="#booking">Réservation</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{marginBottom: '1rem'}}>Légal</h4>
            <ul style={{display: 'grid', gap: '0.5rem', opacity: 0.7}}>
              <li>Mentions Légales</li>
              <li>Politique de Confidentialité</li>
            </ul>
          </div>
        </div>
        <div className="container" style={{marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem'}}>
          &copy; {new Date().getFullYear()} NTherapy - Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

export default App;
