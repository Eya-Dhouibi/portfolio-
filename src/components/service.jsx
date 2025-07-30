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
      title: "Web Development",
      description:
        "Creation of modern and high-performance websites using the latest technologies: HTML5, CSS3, JavaScript, jQuery, Bootstrap, PHP, and MySQL.",
    },
    {
      icon: faLaptopCode,
      title: "WordPress Development",
      description:
        "Development of custom WordPress websites, including theme and plugin integration, WooCommerce setup, and SEO optimization.",
    },
    {
      icon: faPalette,
      title: "PSD/XD/Figma to HTML/CSS Integration",
      description:
        "Precise conversion of graphic mockups into responsive and optimized HTML/CSS code compatible across all devices.",
    },
    {
      icon: faShoppingCart,
      title: "WooCommerce Store Creation",
      description:
        "Custom development of WooCommerce online stores with advanced features to boost sales and enhance user experience.",
    },
    {
      icon: faRocket,
      title: "Performance Optimization",
      description:
        "Improvement of website performance, reduced loading times, and SEO optimization for better search engine rankings.",
    },
    {
      icon: faLaptopCode,
      title: "Landing Page Design",
      description:
        "Creation of impactful and optimized landing pages to maximize conversions and improve lead generation.",
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
    <section id="services" className="services-section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title" data-aos="zoom-in">
          Offered Services
        </h2>
        <div className="slider-wrapper" data-aos="fade-up" data-aos-delay="200">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div
                className="service-card"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
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
