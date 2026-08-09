import React, { useState } from "react";
import "./Products.css";

import plastic1 from "../../assets/imeges/plastic1.png";
import plastic2 from "../../assets/imeges/plastic2.png";
import copper1 from "../../assets/imeges/copper1.png";
import copper2 from "../../assets/imeges/copper2.png";
import aluminium from "../../assets/imeges/aluminium1.png";
import rubber from "../../assets/imeges/rubber1.png";
import machine1 from "../../assets/imeges/machine1.png";
import lathe1 from "../../assets/imeges/lathe1.png";
import drill1 from "../../assets/imeges/drill1.png";

const products = [
  {
    id: 1,
    title: "Plastic Injection Mould",
    image: plastic1,
    desc: "High precision plastic moulds for industrial applications.",
    details:
      "Precision plastic injection moulds manufactured for industrial and commercial applications with excellent dimensional accuracy.",
    features: [
      "High dimensional accuracy",
      "Durable mould construction",
      "Suitable for industrial production",
      "Custom mould design",
    ],
  },

  {
    id: 2,
    title: "Plastic Container Mould",
    image: plastic2,
    desc: "Durable food container and household plastic moulds.",
    details:
      "High-quality plastic container moulds designed for food containers, household products and various plastic manufacturing applications.",
    features: [
      "Custom container designs",
      "High production durability",
      "Excellent surface finish",
      "Precision mould manufacturing",
    ],
  },

  {
    id: 3,
    title: "Copper Electrode",
    image: copper1,
    desc: "EDM copper electrodes with excellent machining accuracy.",
    details:
      "Precision copper electrodes manufactured for EDM and die machining applications where accuracy and surface finish are important.",
    features: [
      "High machining accuracy",
      "Excellent conductivity",
      "EDM compatible",
      "Custom electrode manufacturing",
    ],
  },

  {
    id: 4,
    title: "Copper EDM Electrode",
    image: copper2,
    desc: "Custom copper electrodes for complex die machining.",
    details:
      "Custom copper EDM electrodes manufactured according to complex die and mould requirements.",
    features: [
      "Complex geometry support",
      "Precision EDM machining",
      "Excellent surface finish",
      "Custom dimensions",
    ],
  },

  {
    id: 5,
    title: "Aluminium Parts",
    image: aluminium,
    desc: "Custom aluminium precision machined components.",
    details:
      "Precision aluminium components manufactured according to customer drawings, dimensions and application requirements.",
    features: [
      "Lightweight components",
      "Precision machining",
      "Custom dimensions",
      "Excellent surface finish",
    ],
  },

  {
    id: 6,
    title: "Rubber Die",
    image: rubber,
    desc: "High quality rubber moulds and dies.",
    details:
      "Durable rubber moulds and dies manufactured for industrial applications with accurate dimensions and long production life.",
    features: [
      "Durable construction",
      "Precision dimensions",
      "Industrial applications",
      "Long production life",
    ],
  },

  {
    id: 7,
    title: "VMC Machine",
    image: machine1,
    desc: "Vertical Machining Center for precision mould manufacturing.",
    details:
      "Advanced VMC machining capability for precision moulds, dies and engineering components requiring high accuracy.",
    features: [
      "High precision machining",
      "Complex component machining",
      "Excellent surface finish",
      "Mould and die applications",
    ],
  },

  {
    id: 8,
    title: "Lathe Machine",
    image: lathe1,
    desc: "Precision turning and cylindrical machining.",
    details:
      "Precision turning and cylindrical machining services for shafts, bushings and other engineering components.",
    features: [
      "Precision turning",
      "Cylindrical machining",
      "Custom components",
      "Accurate dimensions",
    ],
  },

  {
    id: 9,
    title: "Drilling Machine",
    image: drill1,
    desc: "Accurate drilling operations for mould components.",
    details:
      "Accurate drilling operations for moulds, dies and engineering components with consistent hole positioning.",
    features: [
      "Accurate drilling",
      "Mould component drilling",
      "Consistent hole positioning",
      "Industrial applications",
    ],
  },
];

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openDrawer = (product) => {
    setSelectedProduct(product);
  };

  const closeDrawer = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="products-section" id="products">

      {/* =========================
          SECTION TITLE
      ========================= */}

      <div className="container">

        <div className="section-title">

          <h5>OUR PRODUCTS</h5>

          <h2 className="product-title">
            Precision Engineering Products
          </h2>

          <p className="product-desc">
            Krisha Enterprises manufactures high-quality moulds,
            precision components, EDM electrodes and machining
            solutions with advanced technology and strict quality
            standards.
          </p>

        </div>


        {/* =========================
            PRODUCTS GRID
        ========================= */}

        <div className="products-grid">

          {products.map((item) => (

            <div className="product-card" key={item.id}>

              <div className="product-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>


              <div className="product-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.desc}
                </p>

                <button
                  className="product-btn"
                  onClick={() => openDrawer(item)}
                >
                  View Product →
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* =========================
            CTA SECTION
        ========================= */}

        <div className="product-cta">

          <div className="cta-content">

            <h2>
              Need Custom Mould Manufacturing?
            </h2>

            <p>
              We manufacture high-quality precision moulds,
              EDM electrodes, CNC machined components and
              industrial tooling solutions according to your
              custom requirements.
            </p>

            <a
              href="#contact"
              className="cta-btn"
            >
              Get Free Quote →
            </a>

          </div>

        </div>

      </div>


      {/* =================================================
          PRODUCT DETAILS DRAWER
      ================================================= */}

      {selectedProduct && (

        <>

          {/* Background Overlay */}

          <div
            className="drawer-overlay"
            onClick={closeDrawer}
          ></div>


          {/* Drawer */}

          <div className="product-drawer">

            <button
              className="drawer-close"
              onClick={closeDrawer}
            >
              ×
            </button>


            <div className="drawer-image">

              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
              />

            </div>


            <div className="drawer-content">

              <span className="drawer-tag">
                KRISHA ENTERPRISES
              </span>

              <h2>
                {selectedProduct.title}
              </h2>

              <p className="drawer-description">
                {selectedProduct.details}
              </p>


              <h4>
                Key Features
              </h4>

              <ul className="drawer-features">

                {selectedProduct.features.map(
                  (feature, index) => (

                    <li key={index}>
                      <span>✓</span>
                      {feature}
                    </li>

                  )
                )}

              </ul>


              <a
                href="#contact"
                className="drawer-enquire"
                onClick={closeDrawer}
              >
                Enquire Now →
              </a>

            </div>

          </div>

        </>

      )}

    </section>
  );
}

export default Products;