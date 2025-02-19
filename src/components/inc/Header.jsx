import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setIsDarkMode(savedTheme === "dark");

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={isSticky ? "sticky" : ""}>
      <div className="container">
        <div className="header_content flex justify-between items-center">
          <button onClick={() => setShowModal(true)} className="menu icon-menu">
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="parent-avatar flex">
            <img src="/img/logo.png" className="avatar" alt="Logo" />
            <div className="icon-verified"></div>
          </div>

          <nav className="hidden md:flex">
            <ul className="flex space-x-4">
              <li className="navbar_item"><a className="navbar_link" href="/#about-me">Accueil</a></li>
              <li className="navbar_item"><a className="navbar_link" href="/#about">Profil</a></li>
              <li className="navbar_item"><a className="navbar_link" href="/#skills">Compétences</a></li>
              <li className="navbar_item"><a className="navbar_link" href="/#services">Services</a></li>
              <li className="navbar_item"><a className="navbar_link" href="/#project">Projets</a></li>
              <li className="navbar_item"><a className="navbar_link" href="/#contact">Contact</a></li>
            </ul>
          </nav>

          <button className="mode flex" onClick={toggleTheme}>
            <FontAwesomeIcon icon={faMoon} className={isDarkMode ? "text-yellow-500" : "text-gray-500"} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showModal && <MobileMenu showModal={showModal} setShowModal={setShowModal} />}
    </header>
  );
};

export default Header;
