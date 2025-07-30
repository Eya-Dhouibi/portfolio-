import React from "react";
import Slider from "react-slick";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <section id="skills" className="skills-section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title" data-aos="zoom-in">
          Skills
        </h2>
        <div data-aos="fade-up" data-aos-delay="200">
          <Slider {...settings}>
            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3>{skill.category}</h3>
                <div className="card-animation">
                  {skill.animation && (
                    <DotLottieReact
                      src={skill.animation}
                      loop
                      autoplay
                      style={{ width: "100%", height: "auto" }}
                    />
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
      </div>
    </section>
  );
};

export default Skills;
