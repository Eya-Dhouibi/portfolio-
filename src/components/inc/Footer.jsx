import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      <a href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
    </a>
        
        <ul className="footer-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#project">Projets</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
        
        <div className="footer-contact">
          <a href="mailto:contact@example.com" className="contact-link">✉ eyadhouibi2025@gmail.com</a>
          <span className="separator">|</span>
          <a href="tel:+21656418926" className="contact-link">☎ +216 56418926</a>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com/Eya-Dhouibi/" target="_blank" rel="noopener noreferrer" className="social-link">🔗 LinkedIn</a>
          <a href="https://www.linkedin.com/in/eya-dhouibi-716620178/" target="_blank" rel="noopener noreferrer" className="social-link">🐙 GitHub</a>
        </div>
        
        <p className="footer-text">© 2025 Spencer Sharp. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
