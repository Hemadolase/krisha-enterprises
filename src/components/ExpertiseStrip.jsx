import React from "react";
import "./ExpertiseStrip.css";

function ExpertiseStrip() {
  const expertise = [
    "Manufacturing Solutions",
    "Plastic Die Mould",
    "Press Components",
    "Tools",
    "Patterns",
    "VMC Machining Works",
  ];

  return (
    <section className="expertise-section">
      <div className="container">
        <div className="expertise-strip">
          {expertise.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  item === "Manufacturing Solutions"
                    ? "expertise-item highlight"
                    : "expertise-item"
                }
              >
                {item}
              </span>

              {index !== expertise.length - 1 && (
                <span className="divider">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertiseStrip;