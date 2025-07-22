import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Skills = () => {
  const skills = [
    {
      animation: "/img/Animation-ux.lottie",
      category: "Design & Graphic Creation",
      items: ["UX/UI", "Photoshop", "Illustrator"],
    },
    {
      animation: "/img/Animation-dev.lottie",
      category: "Front-End Development",
      items: ["HTML", "CSS", "JavaScript", "SASS", "Gulp", "Twig", "Smarty", "Webpack"],
    },
    {
      animation: "/img/Animation-cms.lottie",
      category: "CMS Development",
      items: ["WordPress", "Elementor", "WooCommerce", "PrestaShop", "PHP", "MySQL"],
    },
    {
      animation: "/img/Animation-seo.lottie",
      category: "Analytics & SEO",
      items: ["Google Analytics", "Google Search Console"],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 490, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.category}</h3>
              <div className="card-animation">
                {skill.animation && (
                  <DotLottieReact src={skill.animation} loop autoplay />
                )}
              </div>
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
