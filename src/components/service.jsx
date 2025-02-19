import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faShoppingCart,
  faLaptopCode,
  faRocket,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      icon: faCode,
      title: "Développement Web",
      description:
        "Création de sites Web modernes et performants en utilisant les dernières technologies : HTML5, CSS3, JavaScript, jQuery, Bootstrap, PHP et MySQL.",
    },
    {
      icon:faLaptopCode,
      title: "Développement WordPress",
      description:
        "Développement de sites WordPress personnalisés, y compris l'intégration de thèmes et de plugins, WooCommerce et optimisation SEO.",
    },
    {
      icon: faPalette,
      title: "Intégration PSD/XD/Figma en HTML/CSS",
      description:
        "Conversion précise de maquettes graphiques en code HTML/CSS réactif et optimisé pour une compatibilité sur tous les appareils.",
    },
    {
      icon: faShoppingCart,
      title: "Création de boutiques WooCommerce",
      description:
        "Développement de boutiques en ligne WooCommerce sur mesure, avec des fonctionnalités avancées pour optimiser les ventes et l'expérience utilisateur.",
    },
    {
      icon: faRocket,
      title: "Optimisation et Performance",
      description:
        "Amélioration des performances des sites Web, réduction des temps de chargement et optimisation SEO pour un meilleur classement sur les moteurs de recherche.",
    },
    {
      icon: faLaptopCode,
      title: "Conception de Pages de Destination",
      description:
        "Création de pages de destination impactantes et optimisées pour maximiser les conversions et améliorer la génération de leads.",
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
        <div className="slider-wrapper">
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
      </div>
    </section>
  );
};

export default Services;
