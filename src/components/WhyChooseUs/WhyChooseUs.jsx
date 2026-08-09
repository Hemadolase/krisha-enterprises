import React from "react";
import "./WhyChooseUs.css";

import {
  FaAward,
  FaClock,
  FaCogs,
  FaUsers,
  FaDraftingCompass,
  FaTags,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaAward />,
      title: "Premium Quality",
      desc: "Every product is manufactured with strict quality standards.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      desc: "Committed to delivering projects within the promised timeline.",
    },
    {
      icon: <FaCogs />,
      title: "Advanced Machinery",
      desc: "Modern CNC, VMC and precision machining equipment.",
    },
    {
      icon: <FaUsers />,
      title: "Experienced Team",
      desc: "Highly skilled professionals with years of industry experience.",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Custom Manufacturing",
      desc: "Solutions developed according to customer requirements.",
    },
    {
      icon: <FaTags />,
      title: "Competitive Pricing",
      desc: "Best quality products at affordable prices.",
    },
  ];

  return (
    <section className="why-section" id="why">
      <div className="container">
        <div className="why-heading">
          <span>WHY CHOOSE US</span>

          <h2>Why Industries Trust Krisha Enterprises</h2>

          <p>
            We provide precision engineering solutions using modern
            technology, superior quality materials and a customer-first
            approach.
          </p>
        </div>

        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="why-card">
                <div className="why-icon">{item.icon}</div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;