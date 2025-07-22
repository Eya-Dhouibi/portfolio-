const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="left-section">
            <div className="title">
              <h1>Dhouibi Eya</h1>
              <span>Web Developer / Integrator</span>
            </div>
            <p className="sub-title">
              As a web developer/integrator, I offer my skills to create websites that combine aesthetics and functionality,
              ensuring smooth integration to provide an optimal user experience.
            </p>

            <a href="/img/Dhouibi-eya-integrateur-web.pdf" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-rounded">
                VIEW MY RESUME
                <span className="icon-arrow-right"></span>
              </button>
            </a>

            <div className="all-icons">
              <a href="https://github.com/Eya-Dhouibi/" target="_blank" rel="noopener noreferrer">
                <div className="icon icon-github"></div>
              </a>
              <a href="https://www.linkedin.com/in/eya-dhouibi-716620178/" target="_blank" rel="noopener noreferrer">
                <div className="icon icon-linkedin"></div>
              </a>
            </div>
          </div>

          <div className="right-section">
            <img
              width={553}
              height={420}
              src="/img/hero.png"
              className="img-hero"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
