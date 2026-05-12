import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import Booking from '@/sections/Booking';
import '../Page.css';

export const metadata: Metadata = {
  title: 'Réserver une séance',
  description:
    'Réservez votre séance de cupping therapy, massage ou thérapie manuelle à Paris. Confirmation sous 24h.',
};

export default function ReservationPage() {
  return (
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
}
