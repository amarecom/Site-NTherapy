import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://soulcars.fr'),
  title: {
    default: 'SoulCars — Location de voitures premium',
    template: '%s | SoulCars',
  },
  description:
    'SoulCars, location de voitures premium et de prestige. Réservez en ligne en quelques clics, disponibilité en temps réel.',
  keywords: [
    'location voiture',
    'location voiture prestige',
    'location voiture premium',
    'SoulCars',
    'réservation voiture en ligne',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'SoulCars',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRental',
  name: 'SoulCars',
  description: 'Location de voitures premium et de prestige',
  url: 'https://soulcars.fr',
  priceRange: '€€€',
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700;800;900&display=swap"
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
