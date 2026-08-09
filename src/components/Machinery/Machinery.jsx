import React, { useState } from "react";
import "./Machinery.css";

// Images
import machine1 from "../../assets/imeges/gallery1 .jpeg";
import machine2 from "../../assets/imeges/gallery2.jpeg";
import machine3 from "../../assets/imeges/gallery3.jpeg";
import machine4 from "../../assets/imeges/gallery4.jpeg";
import machine5 from "../../assets/imeges/gallery5.jpeg";
import machine6 from "../../assets/imeges/gallery6.jpeg";
import machine7 from "../../assets/imeges/gallery7.jpeg";
import machine8 from "../../assets/imeges/gallery8.jpeg";

function Machinery() {
  const [selectedMachine, setSelectedMachine] = useState(null);

  const machinery = [
    {
      id: 1,
      image: machine1,
      title: "CNC Vertical Machining Center",
      description:
        "Advanced CNC machining equipment used for precision components and mould manufacturing.",
      details: {
        machineType: "CNC Vertical Machining Center",
        application: "Precision machining and mould manufacturing",
        operation: "Computer Numerical Control",
        accuracy: "High precision machining",
        suitableFor: "Moulds, dies and industrial components",
      },
    },

    {
      id: 2,
      image: machine2,
      title: "CNC Turning Machine",
      description:
        "Modern CNC turning machine designed for accurate and efficient cylindrical component manufacturing.",
      details: {
        machineType: "CNC Turning Machine",
        application: "Cylindrical component manufacturing",
        operation: "Computer Numerical Control",
        accuracy: "High dimensional accuracy",
        suitableFor: "Shafts, bushes and precision components",
      },
    },

    {
      id: 3,
      image: machine3,
      title: "Drilling Machine",
      description:
        "Industrial drilling machine used for accurate hole making and various machining operations.",
      details: {
        machineType: "Drilling Machine",
        application: "Hole drilling and machining",
        operation: "Manual / Mechanical operation",
        accuracy: "Precision hole making",
        suitableFor: "Industrial components and mould parts",
      },
    },

    {
      id: 4,
      image: machine4,
      title: "Precision Machining Center",
      description:
        "Precision machining equipment used for manufacturing complex industrial components.",
      details: {
        machineType: "Precision Machining Center",
        application: "Complex component machining",
        operation: "Precision machining",
        accuracy: "High precision",
        suitableFor: "Dies, moulds and industrial components",
      },
    },

    {
      id: 5,
      image: machine5,
      title: "Conventional Lathe Machine",
      description:
        "Heavy-duty lathe machine suitable for turning, facing and other general machining operations.",
      details: {
        machineType: "Conventional Lathe Machine",
        application: "Turning and facing operations",
        operation: "Manual operation",
        accuracy: "Precision turning",
        suitableFor: "Shafts, bushes and general components",
      },
    },

    {
      id: 6,
      image: machine6,
      title: "Pillar Drilling Machine",
      description:
        "Pillar drilling machine designed for accurate drilling and hole-making operations.",
      details: {
        machineType: "Pillar Drilling Machine",
        application: "Industrial drilling",
        operation: "Manual / Mechanical operation",
        accuracy: "Accurate hole drilling",
        suitableFor: "Metal components and fabrication parts",
      },
    },

    {
      id: 7,
      image: machine7,
      title: "Heavy Duty Lathe Machine",
      description:
        "Heavy-duty lathe machine designed for reliable turning and machining of industrial components.",
      details: {
        machineType: "Heavy Duty Lathe Machine",
        application: "Heavy component turning",
        operation: "Manual machining",
        accuracy: "High precision turning",
        suitableFor: "Large shafts and industrial components",
      },
    },

    {
      id: 8,
      image: machine8,
      title: "EDM / Precision Engineering Machine",
      description:
        "Precision engineering equipment used for detailed mould, die and component manufacturing.",
      details: {
        machineType: "EDM / Precision Engineering Machine",
        application: "Die and mould machining",
        operation: "Electrical discharge machining",
        accuracy: "High precision machining",
        suitableFor: "Dies, moulds and complex components",
      },
    },
  ];

  return (
    <section className="machinery-section">

      {/* =========================
          HEADING
      ========================= */}

      <div className="machinery-heading">

        <span className="section-tag">
          OUR MACHINERY
        </span>

        <h2>
          Our Advanced <span>Machinery</span>
        </h2>

        <p>
          Explore our modern machinery and advanced manufacturing equipment
          used for precision mould making and machining.
        </p>

      </div>


      {/* =========================
          MACHINERY CARDS
      ========================= */}

      <div className="machinery-grid">

        {machinery.map((machine) => (

          <div
            className="machinery-card"
            key={machine.id}
          >

            {/* IMAGE */}

            <div
              className="machine-image"
              onClick={() => setSelectedMachine(machine)}
            >

              <img
                src={machine.image}
                alt={machine.title}
              />

            </div>


            {/* CONTENT */}

            <div className="machine-content">

              <h3>
                {machine.title}
              </h3>

              <div className="orange-line"></div>

              <p>
                {machine.description}
              </p>

              <button
                className="details-btn"
                onClick={() => setSelectedMachine(machine)}
              >
                View Details
              </button>

            </div>

          </div>

        ))}

      </div>


      {/* =========================
          TECHNICAL INFORMATION MODAL
      ========================= */}

      {selectedMachine && (

        <div
          className="machine-modal-overlay"
          onClick={() => setSelectedMachine(null)}
        >

          <div
            className="machine-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              className="modal-close"
              onClick={() => setSelectedMachine(null)}
              aria-label="Close"
            >
              ×
            </button>


            {/* MODAL IMAGE */}

            <div className="modal-image">

              <img
                src={selectedMachine.image}
                alt={selectedMachine.title}
              />

            </div>


            {/* MODAL CONTENT */}

            <div className="modal-content">

              <span className="modal-tag">
                TECHNICAL INFORMATION
              </span>

              <h2>
                {selectedMachine.title}
              </h2>

              <div className="modal-line"></div>


              {/* TECHNICAL DETAILS */}

              <div className="technical-info">

                <div className="info-row">
                  <strong>Machine Type</strong>

                  <span>
                    {selectedMachine.details.machineType}
                  </span>
                </div>


                <div className="info-row">
                  <strong>Application</strong>

                  <span>
                    {selectedMachine.details.application}
                  </span>
                </div>


                <div className="info-row">
                  <strong>Operation</strong>

                  <span>
                    {selectedMachine.details.operation}
                  </span>
                </div>


                <div className="info-row">
                  <strong>Accuracy</strong>

                  <span>
                    {selectedMachine.details.accuracy}
                  </span>
                </div>


                <div className="info-row">
                  <strong>Suitable For</strong>

                  <span>
                    {selectedMachine.details.suitableFor}
                  </span>
                </div>

              </div>


              {/* GET QUOTE BUTTON */}

              <div className="modal-actions">

                <button
                href="#contact" 
                  className="quote-btn"
                  onClick={() => {
                    setSelectedMachine(null);
                    window.location.href = "#contact";
                  }}
                >
                  Get Quote
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Machinery;