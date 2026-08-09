import React, { useState } from "react";
import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaIdCard,
} from "react-icons/fa";

function Contact() {
  // =========================
  // FORM STATE
  // =========================

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================
  // HANDLE INPUT CHANGE
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // =========================
  // HANDLE FORM SUBMIT
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");

        // Clear form
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact Form Error:", error);

      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section" id="contact">

      {/* =========================
          HEADING
      ========================= */}

      <div className="contact-heading">

        <span className="section-tag">
          CONTACT US
        </span>

        <h2>
          Get In <span>Touch</span>
        </h2>

        <p>
          Have a requirement or need more information? Feel free to
          contact us. Our team will be happy to assist you.
        </p>

      </div>


      {/* =========================
          CONTACT CONTAINER
      ========================= */}

      <div className="contact-container">


        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="contact-info">

          <h3>
            Let's Talk About Your Requirement
          </h3>

          <p className="contact-description">
            Get in touch with Krisha Enterprises for precision mould
            manufacturing, press components, VMC machining and
            engineering solutions.
          </p>


          {/* =========================
              ADDRESS
          ========================= */}

          <div className="contact-item">

            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>

              <h4>
                Address
              </h4>

              <p>
                Sr. No. 14, B2, Near Dhadge
                Industrial Estate, Nanded Phata,
                Pune - 411041
              </p>

            </div>

          </div>


          {/* =========================
              PHONE
          ========================= */}

          <div className="contact-item">

            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div>

              <h4>
                Phone
              </h4>

              <a
                href="tel:+919545746570"
                className="contact-link"
              >
                +91 95457 46570
              </a>

            </div>

          </div>


          {/* =========================
              EMAIL
          ========================= */}

          <div className="contact-item">

            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>

              <h4>
                Email
              </h4>

              <a
                href="mailto:krishaent1111@gmail.com"
                className="contact-link"
              >
                krishaent1111@gmail.com
              </a>

            </div>

          </div>


          {/* =========================
              WORKING HOURS
          ========================= */}

          <div className="contact-item">

            <div className="contact-icon">
              <FaClock />
            </div>

            <div>

              <h4>
                Working Hours
              </h4>

              <p>
                Monday - Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>

            </div>

          </div>


          {/* =========================
              GSTIN
          ========================= */}

          <div className="contact-item">

            <div className="contact-icon">
              <FaIdCard />
            </div>

            <div>

              <h4>
                GSTIN
              </h4>

              <p>
                27CEFPPB2392H1ZM
              </p>

            </div>

          </div>


          {/* =========================
              GOOGLE MAP
          ========================= */}

          <div className="contact-map">

            <iframe
              src="https://www.google.com/maps?q=18.458389,73.792564&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Krisha Enterprises Location"
            ></iframe>

          </div>


          {/* =========================
              GET DIRECTIONS
          ========================= */}

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=18.458389,73.792564"
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            Get Directions →
          </a>

        </div>


        {/* =========================
            RIGHT SIDE FORM
        ========================= */}

        <div className="contact-form-box">

          <h3>
            Send Us a Message
          </h3>


          <form onSubmit={handleSubmit}>


            {/* =========================
                NAME + PHONE
            ========================= */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />

              </div>

            </div>


            {/* =========================
                EMAIL
            ========================= */}

            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>


            {/* =========================
                SUBJECT
            ========================= */}

            <div className="form-group">

              <label>
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />

            </div>


            {/* =========================
                MESSAGE
            ========================= */}

            <div className="form-group">

              <label>
                Your Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
              ></textarea>

            </div>


            {/* =========================
                BUTTON
            ========================= */}

            <button
              type="submit"
              className="contact-submit"
              disabled={loading}
            >

              {loading ? "Sending..." : "Send Message"}

            </button>


            {/* =========================
                SUCCESS MESSAGE
            ========================= */}

            {status === "success" && (
              <p className="form-success">
                ✓ Your enquiry has been sent successfully!
              </p>
            )}


            {/* =========================
                ERROR MESSAGE
            ========================= */}

            {status === "error" && (
              <p className="form-error">
                ✕ Something went wrong. Please try again.
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;