import React from "react";
import "./About.css";
import aboutImg from "../../assets/imeges/hero1.png";
import CountUp from "react-countup";

import {
  Target,
  Factory,
  Users,
  ShieldCheck,
  ArrowRight,
  CalendarDays,
  BriefcaseBusiness,
  Smile,
  BadgeCheck,
  Settings
} from "lucide-react";
function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* LEFT SIDE */}

        <div className="about-left">

          <div className="image-wrapper">

            <img src={aboutImg} alt="Krisha Enterprises" />

            <div className="orange-box"></div>

            <div className="experience-card">

              <div className="exp-icon">
              <Settings size={34} />
              </div>

              <div>

                <h4>Precision Engineering</h4>

                <p>
                  Quality • Accuracy <br />
                  • Innovation
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="about-right">

          <div className="section-title">

            <span>ABOUT US</span>

            <div className="line"></div>

          </div>

          <h2>
            ABOUT <br />
            <span>KRISHA</span> ENTERPRISES
          </h2>

          <p>
            Krisha Enterprises is a trusted name in precision engineering and
            manufacturing solutions. Based in Pune, Maharashtra, we specialize
            in Plastic Die Mould Manufacturing, CNC Machining, VMC Machining
            and customized engineering services for industrial projects.
          </p>

          <p>
            With advanced infrastructure, modern machines and a highly skilled
            engineering team, we deliver precision products with reliability,
            innovation and timely execution.
          </p>

          {/* FEATURES */}

          <div className="feature-grid">

            <div className="feature-card">

              <div className="feature-icon">
                <Target size={34} />
              </div>

              <div>

                <h4>Precision Engineering</h4>

                <p>High accuracy and perfect finish.</p>

              </div>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                <Factory size={32} />
              </div>

              <div>

                <h4>Modern Infrastructure</h4>

                <p>Advanced CNC & VMC machining.</p>

              </div>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                <Users size={32} />
              </div>

              <div>

                <h4>Experienced Team</h4>

                <p>Professional engineers & staff.</p>

              </div>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                <ShieldCheck size={32} />
              </div>

              <div>

                <h4>Quality Assurance</h4>

                <p>Strict inspection at every stage.</p>

              </div>

            </div>

          </div>

          <a href="#contact" className="about-btn">

            Read More

            <ArrowRight size={18} />

          </a>

        </div>

      </div>

      {/* COUNTER */}

      <div className="counter-wrapper">

        <div className="counter-item">

          <CalendarDays size={40} />

          <h3>2+</h3>

          <p>Years Experience</p>

        </div>

        <div className="counter-item">

          <BriefcaseBusiness size={40} />

          <h3>250+</h3>

          <p>Projects Completed</p>

        </div>

        <div className="counter-item">

          <Smile size={40} />

          <h3>120+</h3>

          <p>Happy Clients</p>

        </div>

        <div className="counter-item">

          <BadgeCheck size={40} />

          <h3>99%</h3>

          <p>Quality Assurance</p>

        </div>

      </div>

    </section>
  );
}

export default About;