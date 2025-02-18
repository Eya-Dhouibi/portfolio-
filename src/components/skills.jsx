import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Tablette
        settings: {
          arrows: false, 
        },
      },
      {
        breakpoint: 768, // Tablette
        settings: {
          slidesToShow: 2,
          arrows: false, 
        },
      },
      {
        breakpoint: 490, // Mobile
        settings: {
          slidesToShow: 1,
          arrows: false, 
        },
      },
    ],
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Compétences</h2>
        <Slider {...settings}>
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
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
