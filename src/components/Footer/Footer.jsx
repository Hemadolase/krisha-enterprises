import React from "react";
import "./Footer.css";
import logo from "../../assets/imeges/logo.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      {/* =========================
          FOOTER MAIN
      ========================= */}

      <div className="footer-container">

        {/* COMPANY INFO */}

        <div className="footer-column footer-company">

          <div className="footer-brand">

  <img
    src={logo}
    alt="Krisha Enterprises Logo"
    className="footer-logo"
  />

  <div>
    <h2>KRISHA</h2>
    <span>ENTERPRISES</span>
  </div>

</div>
          <p className="footer-description">
            Precision engineering and manufacturing solutions with
            quality, reliability and timely delivery.
          </p>

          <p className="footer-tagline">
            Precision Today... Excellence Tomorrow...
          </p>

        </div>


        {/* QUICK LINKS */}

        <div className="footer-column">

          <h3 className="footer-title">
            Quick Links
          </h3>

          <ul className="footer-links">

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#products">Products</a>
            </li>

            <li>
              <a href="#gallery">Gallery</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>

        </div>


        {/* OUR SERVICES */}

        <div className="footer-column">

          <h3 className="footer-title">
            Our Services
          </h3>

          <ul className="footer-links">

            <li>
              <a href="#services">
                Plastic Die Mould
              </a>
            </li>

            <li>
              <a href="#services">
                Press Tools & Components
              </a>
            </li>

            <li>
              <a href="#services">
                VMC Machining Works
              </a>
            </li>

            <li>
              <a href="#services">
                Pattern Making
              </a>
            </li>

            <li>
              <a href="#services">
                Custom Manufacturing
              </a>
            </li>

            <li>
              <a href="#services">
                Industrial Components
              </a>
            </li>

          </ul>

        </div>


        {/* CONTACT DETAILS */}

        <div className="footer-column">

          <h3 className="footer-title">
            Contact Us
          </h3>

          <div className="footer-contact">

            {/* Address */}

            <div className="footer-contact-item">

              <FaMapMarkerAlt />

              <p>
                Sr. No. 14, B2, Near Dhadge
                Industrial Estate, Nanded Phata,
                Pune - 411041
              </p>

            </div>


            {/* Phone */}

            <div className="footer-contact-item">

              <FaPhoneAlt />

              <a href="tel:+919545746570">
                +91 95457 46570
              </a>

            </div>


            {/* Email */}

            <div className="footer-contact-item">

              <FaEnvelope />

              <a href="mailto:krishaent1111@gmail.com">
                krishaent1111@gmail.com
              </a>

            </div>


            {/* Working Hours */}

            <div className="footer-contact-item">

              <FaClock />

              <p>
                Monday - Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          GST + BOTTOM
      ========================= */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()}{" "}
          <span>Krisha Enterprises</span>.
          All Rights Reserved.
        </p>

        <p>
          GSTIN: <span>27CEFPPB2392H1ZM</span>
        </p>

      </div>

    </footer>
  );
}

export default Footer;