import React from "react";
import "../styles/about.css";
import aboutImage from "../assets/about-bg.jpeg";


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-overlay"></div> {/* ✅ Background Gradient Overlay */}
      <div className="about-container">
        {/* ✅ Left Side Content */}
        <div className="about-text-container">
          <h2 className="about-title">Who We Are</h2>
          <p className="about-text">
            <span>Fournitures et Plus</span> is a leading furniture specialist in 
            <span> Congo DRC.</span> We blend the art of exclusive interior design with 
            custom furniture manufacturing and international imports to create 
            elegant and inspiring spaces.
          </p>
          <div className="about-buttons">
            <a href="#services" className="about-btn">Explore Services</a>
            <a href="#contact" className="about-btn secondary">Contact Us</a>
          </div>
        </div>

        {/* ✅ Right Side Image with Magic Glow */}
        <div className="about-image-container">
        <img src={aboutImage} alt="Furniture Showroom" className="about-image" />

        </div>
      </div>
    </section>
  );
};

export default About;
