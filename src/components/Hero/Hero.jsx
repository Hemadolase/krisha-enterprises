import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


import "./Hero.css";

import hero1 from "../../assets/imeges/hero1.png";
import hero2 from "../../assets/imeges/hero2.png";
import hero3 from "../../assets/imeges/hero3.png";

const slides = [
  {
    image: hero1,
    title: "Precision Plastic Die Mould Manufacturing",
    subtitle:
      "Delivering high-quality plastic moulds with advanced engineering and precision machining.",
  },
  {
    image: hero2,
    title: "High Precision Plastic Mould Solutions",
    subtitle:
      "Custom mould solutions for bottles, containers, automotive and industrial applications.",
  },
  {
    image: hero3,
    title: "Advanced CNC & VMC Machining Services",
    subtitle:
      "Modern machining infrastructure for exceptional accuracy, quality and timely delivery.",
  },
];

function Hero() {
  return (
    <section className="hero">

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="heroSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
  className={`hero-slide slide-${index + 1}`}
  style={{
    backgroundImage: `url(${slide.image})`,
  }}
>
              <div className="overlay"></div>

              <div className="container">

                <div className="hero-content">

                  <span className="hero-tag">
                    Precision Engineering
                  </span>

                  <h1>{slide.title}</h1>

                  <p>{slide.subtitle}</p>

                  <div className="hero-btns">

                    <a href="#products" className="btn-primary">
                      Our Products
                    </a>

                    <a href="#contact"  className="btn-outline">
                      Contact Us
                    </a>

                  </div>

                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      

    </section>
  );
}

export default Hero;