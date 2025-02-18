import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faCode, faTv } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      icon: faGem,
      title: "Conception",
      description:
        "Des projets réussis commencent par une bonne conception. Cela établit une base solide pour un développement futur et permet une croissance durable.",
    },
    {
      icon: faCode,
      title: "Développement",
      description:
        "Je peux coder mes propres conceptions ou utiliser celles de mes clients. Mon objectif est de produire un code propre et bien structuré pour garantir la fiabilité.",
    },
    {
      icon: faTv,
      title: "SEO de Base",
      description:
        "Je peux configurer votre projet pour suivre les principes de base du SEO, ce qui améliorera sa visibilité sur les moteurs de recherche sans recourir à la publicité.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false, 
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          arrows: false, 
        },
      },
    ],
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Services Offerts</h2>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <FontAwesomeIcon icon={service.icon} size="2x" />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
