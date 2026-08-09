import React, { useState } from "react";
import "./Services.css";

import cncImg from "../../assets/imeges/service1.png";
import vmcImg from "../../assets/imeges/service2.png";
import mouldImg from "../../assets/imeges/service3.png";
import copperImg from "../../assets/imeges/service4.jpeg";
import aluminiumImg from "../../assets/imeges/service5.png";
import rubberImg from "../../assets/imeges/service6.png";

import { ArrowRight, X } from "lucide-react";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      image: cncImg,
      title: "CNC Machining",
      desc:
        "High precision CNC machining solutions for industrial and engineering applications.",
      details:
        "We provide high-precision CNC machining services for manufacturing accurate and complex industrial components.",
      points: [
        "Precision component machining",
        "Industrial part manufacturing",
        "High dimensional accuracy",
        "Excellent surface finish",
      ],
    },

    {
      id: 2,
      image: vmcImg,
      title: "VMC Machining",
      desc:
        "Advanced VMC machining with superior accuracy and excellent surface finish.",
      details:
        "Our VMC machining facility is equipped for accurate and efficient manufacturing of complex components and mould parts.",
      points: [
        "Complex component machining",
        "High precision milling",
        "Mould and die machining",
        "Consistent surface finish",
      ],
    },

    {
      id: 3,
      image: mouldImg,
      title: "Plastic Die Mould",
      desc:
        "Custom plastic injection mould manufacturing with premium quality standards.",
      details:
        "We manufacture customized plastic injection moulds designed according to customer requirements and production needs.",
      points: [
        "Custom mould design",
        "Plastic injection moulds",
        "Precision mould manufacturing",
        "Quality-focused production",
      ],
    },

    {
      id: 4,
      image: copperImg,
      title: "Copper Electrode",
      desc:
        "Precision copper electrodes manufactured for EDM and mould applications.",
      details:
        "We manufacture precision copper electrodes suitable for EDM operations and detailed mould manufacturing applications.",
      points: [
        "EDM copper electrodes",
        "Precision electrode machining",
        "Mould applications",
        "Accurate dimensional control",
      ],
    },

    {
      id: 5,
      image: aluminiumImg,
      title: "Aluminium Parts",
      desc:
        "High-quality aluminium precision components manufactured to customer requirements.",
      details:
        "We manufacture customized aluminium components with accurate dimensions and quality surface finishing.",
      points: [
        "Custom aluminium components",
        "Precision machining",
        "Industrial applications",
        "Customer-specific requirements",
      ],
    },

    {
      id: 6,
      image: rubberImg,
      title: "Rubber O-Ring Die",
      desc:
        "Durable and accurate rubber O-ring dies designed for long production life.",
      details:
        "Our rubber O-ring dies are manufactured with precision to provide reliable performance and long production life.",
      points: [
        "O-ring die manufacturing",
        "Precision moulding solutions",
        "Durable construction",
        "Long production life",
      ],
    },
  ];

  return (
    <section className="services-section" id="services">

      {/* =========================
          HEADING
      ========================= */}

      <div className="service-heading">

        <span>OUR SERVICES</span>

        <h2>
          Engineering Solutions We <span>Provide</span>
        </h2>

        <p>
          Krisha Enterprises delivers precision engineering, CNC machining,
          VMC machining and customized manufacturing solutions with superior
          quality and timely delivery.
        </p>

      </div>


      {/* =========================
          SERVICE CARDS
      ========================= */}

      <div className="services-container">

        {services.map((service) => (

          <div
            className="service-card"
            key={service.id}
          >

            <div className="service-img">

              <img
                src={service.image}
                alt={service.title}
              />

            </div>


            <div className="service-content">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.desc}
              </p>


              <button
                className="service-btn"
                onClick={() => setSelectedService(service)}
              >
                Read More

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        ))}

      </div>


      {/* =========================
          SERVICE DETAILS POPUP
      ========================= */}

      {selectedService && (

        <div
          className="service-modal-overlay"
          onClick={() => setSelectedService(null)}
        >

          <div
            className="service-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              className="service-modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Close"
            >
              <X size={26} />
            </button>


            {/* IMAGE */}

            <div className="service-modal-image">

              <img
                src={selectedService.image}
                alt={selectedService.title}
              />

            </div>


            {/* CONTENT */}

            <div className="service-modal-content">

              <span className="service-modal-tag">
                OUR SERVICE
              </span>

              <h2>
                {selectedService.title}
              </h2>

              <div className="service-modal-line"></div>

              <p className="service-modal-description">
                {selectedService.details}
              </p>


              <h3>
                What We Provide
              </h3>


              <ul className="service-points">

                {selectedService.points.map((point, index) => (

                  <li key={index}>
                    <span>✓</span>
                    {point}
                  </li>

                ))}

              </ul>


              {/* CONTACT BUTTON */}

              <a
                href="#contact"
                className="service-contact-btn"
                onClick={() => setSelectedService(null)}
              >
                Contact Us
                <ArrowRight size={18} />
              </a>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Services;