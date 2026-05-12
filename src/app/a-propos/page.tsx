import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import About from '@/sections/About';
import Testimonials from '@/sections/Testimonials';
import '../Page.css';

export const metadata: Metadata = {
  title: 'À Propos — Thérapeute Manuel Paris',
  description:
    'Thérapeute manuel basé à Paris, spécialisé en cupping therapy, massage et thérapie manuelle. Approche personnalisée et bienveillante.',
};

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <AnimatedSection>
        <div className="page-hero">
          <h1>À Propos<span>.</span></h1>
          <p>Thérapeute manuel basé à Paris, spécialisé en cupping, massage et thérapie manuelle.</p>
        </div>
      </AnimatedSection>
      <About />
      <Testimonials />
    </div>
  );
}
