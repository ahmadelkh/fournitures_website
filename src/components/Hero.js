import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../styles/animations.css"; // ✅ Ensure CSS is properly updated
import Logo from "../assets/logo.png"; // ✅ Use transparent background logo

const Hero = () => {
  const subtitleRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(subtitleRef.current, {
      strings: [
        "Your Space, Our Passion.",
        "Bringing Ideas to Life.",
        "Elevate Your Interiors.",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="hero">
      {/* ✅ Background Effects */}
      <div className="hero-overlay"></div>
      <div className="floating-particles"></div>

      {/* ✅ Company Logo with Glow Effect */}
      <div className="hero-logo-container">
        <img src={Logo} alt="Fournitures et Plus Logo" className="hero-logo" />
      </div>

      {/* ✅ Liquid Animated Title */}
      <h1 className="hero-title">
        <span className="liquid-text">Fournitures</span> et <span>Plus</span>
      </h1>

      {/* ✅ Typed.js Animated Subtitle */}
      <p ref={subtitleRef} className="hero-subtitle"></p>

      {/* ✅ Call-to-Action Button */}
      <div className="hero-button-container">
        <a href="#products" className="hero-button">Explore Collection</a>
      </div>

      {/* ✅ Scroll Down Indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="bounce-arrow"></div>
      </div>
    </div>
  );
};

export default Hero;
