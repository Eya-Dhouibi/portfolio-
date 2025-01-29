import { useState, useEffect } from "react";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Fonction pour écouter le défilement
  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  // Fonction pour basculer le thème clair/sombre
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Appliquer le dernier thème utilisé au chargement
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setIsDarkMode(savedTheme === "dark");

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className={isSticky ? "sticky" : ""}>
      <div className="container">
        <div className="header_content">
          {/* Bouton pour ouvrir le modal */}
          <button onClick={() => setShowModal(true)} className="menu icon-menu flex">
            {/* Icône du menu */}
          </button>

          {/* Section de l'avatar */}
          <div className="parent-avatar flex">
            <img src="/img/logo.png" className="avatar" alt="Logo" />
            <div className="icon-verified"></div>
          </div>

          {/* Navigation principale */}
          <nav>
            <ul className="flex">
              <li className="navbar_item"><a className="navbar_link" href="/#about-me">Accueil</a></li>
              <li className="navbar_item"><a className="navbar_link" href="/#about">Profil</a></li>
              <li className="navbar_item"><a className="navbar_link" href="/#skills">Compétences</a></li>
              <li className="navbar_item"><a className="navbar_link" href="/#services">Services</a></li>
              <li className="navbar_item"><a className="navbar_link" href="/#project">Projets</a></li>
              <li className="navbar_item"><a className="navbar_link" href="/#contact">Contact</a></li>
            </ul>
          </nav>

          {/* Bouton de mode (thème clair/sombre) */}
          <button className="mode flex" onClick={toggleTheme}>
            <span className={`icon-moon-o ${isDarkMode ? "active" : ""}`}></span>
          </button>

          {/* Modal de navigation mobile */}
          {showModal && (
            <div className="fixed">
              <ul className="modal">
                <li>
                  <button className="icon-close" onClick={() => setShowModal(false)}>
                    {/* Icône pour fermer le modal */}
                  </button>
                </li>
                <li className="navbar_item"><a className="navbar_link" href="/#about-me">Accueil</a></li>
                <li className="navbar_item"><a className="navbar_link" href="/#about">Profil</a></li>
                <li className="navbar_item"><a className="navbar_link" href="/#skills">Compétences</a></li>
                <li className="navbar_item"><a className="navbar_link" href="/#services">Services</a></li>
                <li className="navbar_item"><a className="navbar_link" href="/#project">Projets</a></li>
                <li className="navbar_item"><a className="navbar_link" href="/#contact">Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
