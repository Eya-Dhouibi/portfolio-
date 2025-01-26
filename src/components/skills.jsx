const Skills = () => {
  const skills = [
    {
      category: "Design & Création Graphique",
      items: ["UX/UI", "Photoshop", "Illustrator"],
    },
    {
      category: "Développement Front-End",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "SASS",
        "Gulp",
        "Twig",
        "Smarty",
        "Webpack",
      ],
    },
    {
      category: "Développement CMS",
      items: ["WordPress", "Elementor", "WooCommerce", "PrestaShop", "PHP", "MySQL"],
    },
    {
      category: "Analyse et SEO",
      items: ["Google Analytics", "Google Search Console"],
    },
    {
      category: "Contrôle de Version",
      items: ["Git"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Compétences</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.category}</h3>
              <p>
                {skill.items.map((item, idx) => (
                  <span key={idx}>
                    {item}
                    {idx < skill.items.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
