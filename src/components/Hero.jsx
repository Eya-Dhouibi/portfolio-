const Hero = () => {
  return (
    <section className="hero">
          <div  className="container">
          <div  className="hero-content">
      <div className="left-section">
        <h1 className="title">
        Développeur / Intégrateur web
        </h1>
        <p className="sub-title">
        En tant que développeur /  intégrateur  web, je propose mes compétences pour créer des sites 
        alliant esthétiques et fonctionnalité, en veillant à une intégration fluide pour offrir 
        une expérience utilisateur optimale.
        </p>

        <a href="/img/Dhouibieya-integrateur-web.pdf" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-rounded">
              DÉCOUVRIR MON CV
                <span className="icon-arrow-right"></span>
              </button>
            </a>

        <div className="all-icons">
          <a href="https://github.com/Eya-Dhouibi/" target="_blank" rel="noopener noreferrer"><div className="icon icon-github"></div></a>
          <a href="https://www.linkedin.com/in/eya-dhouibi-716620178/" target="_blank" rel="noopener noreferrer"><div className="icon icon-linkedin"></div></a>
        </div>
      </div>

      <div className="right-section">
      <img width={553} height={420} src="/img/hero.png" className="img-hero" alt="hero" />
      </div>
      </div>
      </div>
    </section>
   
  );
};

export default Hero;
