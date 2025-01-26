const Skills = () => {
  const skills = [
    {
      category: "Design & Création Graphique",
      items: ["UX/UI", "Photoshop", "Illustrator"],
    },
    {
      category: "Développement Front-End",
      items: [
        "HTML", "CSS", "JavaScript", "Bootstrap", "SASS", "Gulp", "Twig", "Smarty", "Webpack",
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
    <section id="skills">
    <div className="container">
    <h2>Compétences</h2>
     <div className="skills-content">
      {skills.map((skill, index) => (
            <article className="card">
            <div className="box">
            <h3 className="title">{skill.category}</h3>
                {skill.items.map((item, idx) => (
                  <span className="sub-title" key={idx}> {item},&nbsp;</span>
                ))}
            </div>
          </article>
      ))}
      </div>
    </div>
    </section>
  );
};

export default Skills;
