import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Site de Kinésithérapie",
    description: "Création d'un site vitrine responsive pour un cabinet de kinésithérapie.",
    category: "HTML & CSS",
    image: "/img/projet-1.jpg",
    link: "https://www.florianthibautkinesitherapeute.be/",
  },
  {
    id: 2,
    title: "Atelier de la Flamme",
    description: "Site web pour une entreprise spécialisée dans l'isolation et la cheminée.",
    category: "HTML & CSS",
    image: "/img/projet-2.jpg",
    link: "https://www.atelierdelaflammeetdelisolation.com/",
  },
  {
    id: 3,
    title: "Cabinet d'Avocate",
    description: "Site pour un cabinet d'avocate, mettant en avant les services juridiques.",
    category: "HTML & CSS",
    image: "/img/projet-3.jpg",
    link: "https://www.leguillant-avocate.fr/",
  },
  {
    id: 4,
    title: "Auto-École Ciné Evreux",
    description: "Site vitrine pour une auto-école, avec une section d'inscription en ligne.",
    category: "HTML & CSS",
    image: "/img/projet-4.jpg",
    link: "https://www.auto-ecole-cine-evreux.fr/",
  },
  {
    id: 5,
    title: "RH44 Nettoyage",
    description: "Site pour une entreprise de nettoyage industriel et domestique.",
    category: "HTML & CSS",
    image: "/img/projet-5.jpg",
    link: "https://www.rh44-nettoyage.fr/",
  },
  {
    id: 6,
    title: "ChocoSec",
    description: "Site de vente en ligne des fruits secs et de chocolate",
    category: "Wordpress & Prestashop",
    image: "/img/1.png",
    link: "http://chocosec.wuaze.com/",
  },
];

const categories = ["Tous les projets", "HTML & CSS", "JavaScript", "Wordpress & Prestashop"];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("Tous les projets");

  const filteredProjects =
    activeCategory === "Tous les projets"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="project">
      <div className="container">
        <h2>Projets</h2>
        <div className="myProject-content">
          <div className="left-section">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="right-section">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <article key={project.id} className="card">
                  <img src={project.image} alt={project.title} />
                  <div className="box">
                    <h3 className="title">{project.title}</h3>
                    <p className="sub-title">{project.description}</p>
                    <div className="flex icons">
                      <a className="link flex" href={project.link} target="_blank" rel="noopener noreferrer">
                        Voir le site
                        <span style={{ alignSelf: "end" }} className="icon-arrow-right"></span>
                      </a>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p>Aucun projet disponible pour cette catégorie.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
