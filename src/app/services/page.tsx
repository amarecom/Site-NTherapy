import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import Services from '@/sections/Services';
import '../Page.css';

export const metadata: Metadata = {
  title: 'Services — Cupping, Massage, Thérapie Manuelle',
  description:
    'Découvrez nos services de cupping therapy, massage thérapeutique et thérapie manuelle à Paris. Soins personnalisés pour chaque patient.',
};

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      <AnimatedSection>
        <div className="page-hero">
          <h1>Nos Services<span>.</span></h1>
          <p>Cupping therapy, massage et thérapie manuelle — des soins pensés pour vous à Paris.</p>
        </div>
      </AnimatedSection>
      <Services />
    </div>
  );
}
