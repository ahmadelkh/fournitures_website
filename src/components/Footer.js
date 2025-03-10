import React from "react";
import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1Evmj8uudF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://www.instagram.com/fournitures_et_plus?igsh=MWszdTl6ZmNzamJ3ZQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaPhone className="contact-icon" /> +243 821 212 812</p>
          <p><FaEnvelope className="contact-icon" /> info@fournituresplus.com</p>
        </div>

        {/* Copyright */}
        <div className="footer-section">
          <h3>Fournitures et Plus</h3>
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // ✅ Make sure Footer is exported as default
