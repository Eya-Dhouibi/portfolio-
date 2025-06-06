import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "florianthibaut kinesitherapeute",
    description: "Création d'un site vitrine responsive pour un cabinet de kinésithérapie.",
    category: "HTML & CSS",
    image: "/img/florianthibautkinesitherapeute.jpg",
    link: "https://www.florianthibautkinesitherapeute.be/",
  },
  {
    id: 2,
    title: "Atelier de la Flamme",
    description: "Site web pour une entreprise spécialisée dans l'isolation et la cheminée.",
    category: "HTML & CSS",
    image: "/img/Magasin-chauffage-Torcy.jpg",
    link: "https://www.atelierdelaflammeetdelisolation.com/",
  },
  {
    id: 3,
    title: "Cabinet d'Avocate",
    description: "Site pour un cabinet d'avocate, mettant en avant les services juridiques.",
    category: "HTML & CSS",
    image: "/img/leguillant-avocate.jpg",
    link: "https://www.leguillant-avocate.fr/",
  },
  {
    id: 4,
    title: "Auto-École Ciné Evreux",
    description: "Site vitrine pour une auto-école, avec une section d'inscription en ligne.",
    category: "HTML & CSS",
    image: "/img/auto-ecole-cine.jpg",
    link: "https://www.auto-ecole-cine-evreux.fr/",
  },
  {
    id: 5,
    title: "RH44 Nettoyage",
    description: "Site pour une entreprise de nettoyage industriel et domestique.",
    category: "HTML & CSS",
    image: "/img/rh44-nettoyage.jpg",
    link: "https://www.rh44-nettoyage.fr/",
  },
  {
    id: 6,
    title: "ChocoSec",
    description: "Site de vente en ligne des fruits secs et de chocolate",
    category: "Wordpress & Prestashop",
    image: "/img/chocoSec.jpg",
    link: "http://chocosec.wuaze.com/",
  },
  {
    id: 7,
    title: "Willworkplus",
    description: "Site de vente en ligne des fruits secs et de chocolate",
    category: "Wordpress & Prestashop",
    image: "/img/willworkplus.jpg",
    link: "https://willworkplus.com/",
  }
  ,
  {
    id: 8,
    title: "Sandrinegloriant therapie",
    description: "Espace en ligne apaisant et intuitif, conçu pour accompagner votre parcours vers le bien-être.",
    category: "HTML & CSS",
    image: "/img/sandrinegloriant.jpg",
    link: "www.sandrinegloriant-therapie.fr",
  },
  {
    id: 9,
    title: "Hlulbayt bookstore",
    description: "Librairie en ligne dédiée à la richesse du savoir et à la découverte du patrimoine spirituel.",
    category: "Wordpress & Prestashop",
    image: "/img/bookstore.jpg",
    link: "hlulbaytbookstore.tn",
   },
  // {
  //   id: 10,
  //   title: "Distretto",
  //   description: "",
  //   category: "Wordpress & Prestashop",
  //   image: "/img/willworkplus.jpg",
  //   link: "https://amazing-jepsen.31-220-87-235.plesk.page/",
  // }
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
