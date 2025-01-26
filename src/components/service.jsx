const Services = () => {
  const services = [
    {
      icon: "icon-gem",
      title: "Conception",
      description:
        "Des projets réussis commencent par une bonne conception. Cela établit une base solide pour un développement futur et permet une croissance durable.",
    },
    {
      icon: "icon-code",
      title: "Développement",
      description:
        "Je peux coder mes propres conceptions ou utiliser celles de mes clients. Mon objectif est de produire un code propre et bien structuré pour garantir la fiabilité.",
    },
    {
      icon: "icon-tv",
      title: "SEO de Base",
      description:
        "Je peux configurer votre projet pour suivre les principes de base du SEO, ce qui améliorera sa visibilité sur les moteurs de recherche sans recourir à la publicité.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Services Offerts</h2>
        <p className="section-description">
          Avec plus de 5 ans d'expérience dans la conception et le développement web, 
          j'ai découvert que je peux aider les startups et les entreprises grâce aux services suivants :
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <i className={service.icon}></i>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
