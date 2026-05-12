export type CarStatus = 'available' | 'unavailable' | 'reserved';
export type CarCategory = 'berline' | 'suv' | 'sportive' | 'utilitaire' | 'cabriolet';
export type Transmission = 'automatique' | 'manuelle';
export type Fuel = 'essence' | 'diesel' | 'électrique' | 'hybride';

export interface Car {
  id: string;
  name: string;
  brand: string;
  category: CarCategory;
  year: number;
  seats: number;
  transmission: Transmission;
  fuel: Fuel;
  pricePerDay: number;
  features: string[];
  status: CarStatus;
  calLink: string;
  description: string;
}

export const CARS: Car[] = [
  {
    id: 'mercedes-classe-e',
    name: 'Classe E 220d',
    brand: 'Mercedes-Benz',
    category: 'berline',
    year: 2024,
    seats: 5,
    transmission: 'automatique',
    fuel: 'diesel',
    pricePerDay: 120,
    features: ['GPS', 'Sièges chauffants', 'Toit ouvrant', 'Caméra de recul', 'Bluetooth'],
    status: 'available',
    calLink: 'soulcars/mercedes-classe-e',
    description: 'La berline de référence alliant confort, technologie et élégance.',
  },
  {
    id: 'bmw-x5',
    name: 'X5 xDrive40i',
    brand: 'BMW',
    category: 'suv',
    year: 2024,
    seats: 7,
    transmission: 'automatique',
    fuel: 'essence',
    pricePerDay: 160,
    features: ['7 places', 'GPS', '4x4', 'Toit panoramique', 'Sièges chauffants', 'Apple CarPlay'],
    status: 'available',
    calLink: 'soulcars/bmw-x5',
    description: 'Le SUV premium pour vos voyages en famille ou en équipe.',
  },
  {
    id: 'porsche-911',
    name: '911 Carrera S',
    brand: 'Porsche',
    category: 'sportive',
    year: 2023,
    seats: 2,
    transmission: 'automatique',
    fuel: 'essence',
    pricePerDay: 380,
    features: ['450 ch', 'GPS', 'Sport Chrono', 'Sièges baquets', 'Échappement sport'],
    status: 'available',
    calLink: 'soulcars/porsche-911',
    description: 'L\'icône des sportives pour une expérience de conduite inoubliable.',
  },
  {
    id: 'tesla-model-s',
    name: 'Model S Plaid',
    brand: 'Tesla',
    category: 'berline',
    year: 2024,
    seats: 5,
    transmission: 'automatique',
    fuel: 'électrique',
    pricePerDay: 200,
    features: ['1020 ch', 'Autopilot', 'Écran 17"', '600 km d\'autonomie', 'Supercharge inclus'],
    status: 'reserved',
    calLink: 'soulcars/tesla-model-s',
    description: 'La berline électrique la plus rapide au monde.',
  },
  {
    id: 'range-rover',
    name: 'Range Rover Sport',
    brand: 'Land Rover',
    category: 'suv',
    year: 2024,
    seats: 5,
    transmission: 'automatique',
    fuel: 'hybride',
    pricePerDay: 220,
    features: ['4x4', 'Toit panoramique', 'Massage sièges', 'Méridian Audio', 'GPS'],
    status: 'available',
    calLink: 'soulcars/range-rover',
    description: 'Le summum du luxe en SUV pour des aventures sans compromis.',
  },
  {
    id: 'audi-a7',
    name: 'A7 Sportback 55 TFSI',
    brand: 'Audi',
    category: 'berline',
    year: 2023,
    seats: 5,
    transmission: 'automatique',
    fuel: 'essence',
    pricePerDay: 140,
    features: ['Quattro', 'Matrix LED', 'GPS MMI', 'Toit panoramique', 'Virtual Cockpit'],
    status: 'available',
    calLink: 'soulcars/audi-a7',
    description: 'Coupé 4 portes alliant sportivité et élégance à l\'allemande.',
  },
  {
    id: 'lamborghini-huracan',
    name: 'Huracán EVO',
    brand: 'Lamborghini',
    category: 'sportive',
    year: 2023,
    seats: 2,
    transmission: 'automatique',
    fuel: 'essence',
    pricePerDay: 950,
    features: ['640 ch', 'V10', 'All-Wheel Drive', 'Caméra 360°', 'Lift système'],
    status: 'available',
    calLink: 'soulcars/lamborghini-huracan',
    description: 'L\'expérience supercar absolue, pour les moments d\'exception.',
  },
  {
    id: 'mercedes-amg-gle',
    name: 'GLE 63 S AMG',
    brand: 'Mercedes-AMG',
    category: 'suv',
    year: 2024,
    seats: 5,
    transmission: 'automatique',
    fuel: 'essence',
    pricePerDay: 280,
    features: ['612 ch', '4MATIC+', 'Airmatic', 'Burmester Audio', 'AMG Track Pace'],
    status: 'unavailable',
    calLink: 'soulcars/mercedes-amg-gle',
    description: 'La puissance AMG dans le corps d\'un SUV de prestige.',
  },
  {
    id: 'ferrari-roma',
    name: 'Roma',
    brand: 'Ferrari',
    category: 'cabriolet',
    year: 2023,
    seats: 2,
    transmission: 'automatique',
    fuel: 'essence',
    pricePerDay: 1200,
    features: ['620 ch', 'V8 Turbo', 'Manettino', 'Caméra 360°', 'Lift hydraulique'],
    status: 'available',
    calLink: 'soulcars/ferrari-roma',
    description: 'La dolce vita à l\'état pur — élégance et performance absolue.',
  },
  {
    id: 'volkswagen-transporter',
    name: 'Transporter 6.1',
    brand: 'Volkswagen',
    category: 'utilitaire',
    year: 2023,
    seats: 9,
    transmission: 'manuelle',
    fuel: 'diesel',
    pricePerDay: 90,
    features: ['9 places', 'Climatisation', 'GPS', 'Bluetooth', 'Grand coffre'],
    status: 'available',
    calLink: 'soulcars/vw-transporter',
    description: 'Idéal pour les groupes, déménagements et transferts aéroport.',
  },
];

export const CATEGORIES: { value: CarCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Toutes' },
  { value: 'berline', label: 'Berlines' },
  { value: 'suv', label: 'SUV' },
  { value: 'sportive', label: 'Sportives' },
  { value: 'cabriolet', label: 'Cabriolets' },
  { value: 'utilitaire', label: 'Utilitaires' },
];

export const STATUSES: { value: CarStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'Tous' },
  { value: 'available', label: 'Disponibles' },
  { value: 'reserved', label: 'Réservées' },
  { value: 'unavailable', label: 'Indisponibles' },
];

export const STATUS_LABELS: Record<CarStatus, string> = {
  available: 'Disponible',
  reserved: 'Réservée',
  unavailable: 'Indisponible',
};

export const FUEL_LABELS: Record<Fuel, string> = {
  essence: 'Essence',
  diesel: 'Diesel',
  électrique: 'Électrique',
  hybride: 'Hybride',
};
