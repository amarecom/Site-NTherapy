import type { FC } from 'react';
import './Navbar.css';

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          NTherapy<span>.</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">À Propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#booking" className="btn btn-primary">Réserver</a>
      </div>
    </nav>
  );
};

export default Navbar;
