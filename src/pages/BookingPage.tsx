import AnimatedSection from '../components/AnimatedSection';
import Booking from '../sections/Booking';
import './Page.css';

const BookingPage = () => (
  <div className="page-wrapper">
    <AnimatedSection>
      <div className="page-hero">
        <h1>Réservation<span>.</span></h1>
        <p>Choisissez un créneau — je confirme votre rendez-vous par email sous 24h.</p>
      </div>
    </AnimatedSection>
    <Booking />
  </div>
);

export default BookingPage;
