import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        {/* Les autres sections seront ajoutées ici */}
        <section id="services" className="section-padding container" style={{textAlign: 'center'}}>
          <h2>Nos Services</h2>
          <p style={{marginTop: '1rem', color: 'var(--color-text-muted)'}}>Découvrez comment nous pouvons vous aider à retrouver votre mobilité.</p>
          <div style={{marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
            <div className="service-card">
              <h3>Ostéopathie Générale</h3>
              <p>Soulagement des douleurs articulaires et musculaires.</p>
            </div>
            <div className="service-card">
              <h3>Ostéopathie du Sport</h3>
              <p>Accompagnement et récupération pour les sportifs.</p>
            </div>
            <div className="service-card">
              <h3>Pédiatrie</h3>
              <p>Soins doux pour les nourrissons et les enfants.</p>
            </div>
          </div>
        </section>
      </main>
      <footer style={{backgroundColor: 'var(--color-secondary)', color: 'white', padding: '3rem 0', marginTop: '4rem'}}>
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem'}}>
          <div>
            <h3>NTherapy.</h3>
            <p style={{opacity: 0.7, marginTop: '1rem'}}>Votre partenaire santé au quotidien.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p style={{opacity: 0.7, marginTop: '1rem'}}>123 Rue de la Santé, Paris</p>
            <p style={{opacity: 0.7}}>01 23 45 67 89</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
