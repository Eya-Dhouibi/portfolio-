import { useState, useEffect } from "react";

const Header = () => {
  const [showModal, setShowModal] = useState(false); // Etat pour afficher/masquer le modal
  const [isSticky, setIsSticky] = useState(false); // Etat pour gérer le sticky header

  // Fonction pour écouter le défilement
  const handleScroll = () => {
    if (window.scrollY > 50) { // Définir la hauteur à partir de laquelle le header devient sticky
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Utilisation de useEffect pour ajouter l'événement scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'événement au démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className={isSticky ? "sticky" : ""}>
      <div  className="container">
        <div className="header_content">
      {/* Bouton pour ouvrir le modal */}
      <button 
        onClick={() => setShowModal(true)} 
        className="menu icon-menu flex"
      >
        {/* Contenu du bouton menu, probablement une icône */}
      </button>

      {/* Section de l'avatar */}
      <div className="parent-avatar flex">
        <img src="/img/logo.png" className="avatar" alt="Logo" />
        <div className="icon-verified"></div>
      </div>

      {/* Navigation principale */}
      <nav>
        <ul className="flex">
        <li className="navbar_item"><a aria-current="page" className="navbar_link" href="/#about-me">Accueil</a></li>
        <li className="navbar_item"><a aria-current="page" className="navbar_link" href="/#about">Profil</a></li>
        <li className="navbar_item"><a aria-current="page" className="navbar_link" href="/#skills">Compétences</a></li>
        <li className="navbar_item"><a aria-current="page" className="navbar_link" href="/#project">Porjets</a></li>
        <li className="navbar_item"><a aria-current="page" className="navbar_link" href="/#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Bouton de mode (thème clair/sombre) */}
      <button className="mode flex">
        <span className="icon-moon-o"></span>
      </button>

      {/* Modal, affiché seulement si showModal est true */}
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button 
                className="icon-close" 
                onClick={() => setShowModal(false)} // Ferme le modal
              >
                {/* Icone pour fermer le modal */}
              </button>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Speaking</a></li>
            <li><a href="#">Uses</a></li>
          </ul>
        </div>
      )}
      </div>
      </div>
    </header>
  );
};

export default Header;
