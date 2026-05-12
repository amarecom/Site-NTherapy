import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://n-therapy.fr'),
  title: {
    default: 'N_Therapy — Cupping, Massage & Thérapie Manuelle à Paris',
    template: '%s | N_Therapy',
  },
  description:
    'N_Therapy, spécialiste du cupping therapy, massage thérapeutique et thérapie manuelle à Paris. Réservez en ligne.',
  keywords: [
    'cupping therapy Paris',
    'massage thérapeutique Paris',
    'thérapie manuelle Paris',
    'cupping ventouses',
    'N_Therapy',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'N_Therapy',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'N_Therapy',
  description: 'Cupping therapy, massage et thérapie manuelle à Paris',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR',
  },
  url: 'https://n-therapy.fr',
  sameAs: ['https://www.instagram.com/n_therapy._'],
  priceRange: '€€',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
