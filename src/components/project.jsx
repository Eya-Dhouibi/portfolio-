import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Florian Thibaut – Physiotherapist",
    description: "Responsive showcase website for a physiotherapy clinic.",
    category: "HTML & CSS",
    image: "/img/florianthibautkinesitherapeute.jpg",
    link: "https://www.florianthibautkinesitherapeute.be/",
  },
  {
    id: 2,
    title: "Atelier de la Flamme",
    description: "Website for a company specialized in insulation and fireplaces.",
    category: "HTML & CSS",
    image: "/img/Magasin-chauffage-Torcy.jpg",
    link: "https://www.atelierdelaflammeetdelisolation.com/",
  },
  {
    id: 3,
    title: "Law Firm Website",
    description: "Website for a law firm, highlighting legal services.",
    category: "HTML & CSS",
    image: "/img/leguillant-avocate.jpg",
    link: "https://www.leguillant-avocate.fr/",
  },
  {
    id: 4,
    title: "Ciné Evreux Driving School",
    description: "Showcase site for a driving school, with an online registration section.",
    category: "HTML & CSS",
    image: "/img/auto-ecole-cine.jpg",
    link: "https://www.auto-ecole-cine-evreux.fr/",
  },
  {
    id: 5,
    title: "RH44 Cleaning",
    description: "Website for an industrial and domestic cleaning company.",
    category: "HTML & CSS",
    image: "/img/rh44-nettoyage.jpg",
    link: "https://www.rh44-nettoyage.fr/",
  },
  {
    id: 6,
    title: "ChocoSec",
    description: "Online store for dried fruits and chocolate.",
    category: "Wordpress & Prestashop",
    image: "/img/chocoSec.jpg",
    link: "http://chocosec.wuaze.com/",
  },
  {
    id: 7,
    title: "Willworkplus",
    description: "Online store for dried fruits and chocolate.",
    category: "Wordpress & Prestashop",
    image: "/img/willworkplus.jpg",
    link: "https://willworkplus.com/",
  },
  {
    id: 8,
    title: "Sandrine Gloriant – Therapy",
    description: "A calming and intuitive online space designed to support your wellness journey.",
    category: "HTML & CSS",
    image: "/img/sandrinegloriant.jpg",
    link: "https://www.sandrinegloriant-therapie.fr",
  },
  {
    id: 9,
    title: "Hlulbayt Bookstore",
    description: "Online bookstore dedicated to the richness of knowledge and the discovery of spiritual heritage.",
    category: "Wordpress & Prestashop",
    image: "/img/bookstore.jpg",
    link: "https://hlulbaytbookstore.tn",
  },
];

const categories = ["All Projects", "HTML & CSS", "JavaScript", "Wordpress & Prestashop"];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="project">
      <div className="container" data-aos="fade-up">
        <h2 data-aos="zoom-in">Projects</h2>
        <div className="myProject-content">
          <div className="left-section" data-aos="fade-right">
            {categories.map((category, index) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="right-section">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <article
                  key={project.id}
                  className="card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img src={project.image} alt={project.title} />
                  <div className="box">
                    <h3 className="title">{project.title}</h3>
                    <p className="sub-title">{project.description}</p>
                    <div className="flex icons">
                      <a
                        className="link flex"
                        href={
                          project.link.startsWith("http")
                            ? project.link
                            : `https://${project.link}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                        <span
                          style={{ alignSelf: "end" }}
                          className="icon-arrow-right"
                        ></span>
                      </a>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p data-aos="fade-in">No projects available for this category.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
