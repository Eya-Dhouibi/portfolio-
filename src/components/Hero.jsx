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
              <button type="button" className="btn-rounded">
                Consulter Cv
                <span className="icon-arrow-right"></span>
              </button>
            </a>

        <div className="all-icons">
          <div className="icon icon-github"><a href="https://github.com/Eya-Dhouibi/"></a></div>
          <div className="icon icon-linkedin"><a href="https://www.linkedin.com/in/eya-dhouibi-716620178/"></a></div>
        </div>
      </div>

      <div className="right-section">
      <img width={699} height={531} src="/img/hero.png" className="img-hero" alt="hero" />
      </div>
      </div>
      </div>
    </section>
   
  );
};

export default Hero;
