import React from "react";
import "./TopHeader.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

function TopHeader() {
  return (
    <div className="top-header">

      <div className="container top-header-container">

        {/* LEFT - LOCATION */}
        <div className="top-item location">
          <FaMapMarkerAlt className="top-icon" />
          <span>Pune, Maharashtra</span>
        </div>


        {/* RIGHT - PHONE + EMAIL */}
        <div className="top-right">

          {/* PHONE */}
          <div className="top-item">

            <a href="tel:+919545746570">

              <FaPhoneAlt className="top-icon" />

              <span>
                +91 95457 46570
              </span>

            </a>

          </div>


          {/* EMAIL */}
          <div className="top-item">

            <a href="mailto:krishaent1111@gmail.com">

              <FaEnvelope className="top-icon" />

              <span>
                krishaent1111@gmail.com
              </span>

            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TopHeader;