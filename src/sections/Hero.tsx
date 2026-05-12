'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import './Hero.css';

const Hero = () => (
  <section id="home" className="hero">
    <div className="container hero-content">
      <div className="hero-text">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1>Cupping, Massage & Thérapie Manuelle à Paris<span>.</span></h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Soulagez vos douleurs et retrouvez votre bien-être grâce à des soins personnalisés au cœur de Paris, Île-de-France.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/reservation" className="btn btn-action">Prendre Rendez-vous</Link>
          <Link href="/services" className="btn btn-outline">Nos Services</Link>
        </motion.div>
      </div>
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="abstract-shape"></div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
