import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/services.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">What We Do Best</h2>
      <div className="services-container">
        {/* Service Box 1 */}
        <div className="service-box" data-aos="fade-up">
          <div className="service-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Custom Furniture"
            />
          </div>
          <h3>Custom Furniture</h3>
          <p className="service-description">
          We specialize in creating high-quality, tailor-made furniture that blends
aesthetics and durability. Each piece is crafted to be both functional and
stylish.

          </p>
        </div>

        {/* Service Box 2 */}
        <div className="service-box" data-aos="fade-up" data-aos-delay="200">
          <div className="service-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1011/1011323.png"
              alt="Interior Design"
            />
          </div>
          <h3>Interior Design</h3>
          <p className="service-description">
          Our design philosophy transforms spaces into visually stunning 
and highly functional environments. We blend modern aesthetics 
with practical solutions to reflect your unique style.

          </p>
        </div>

        {/* Service Box 3 */}
        <div className="service-box" data-aos="fade-up" data-aos-delay="400">
          <div className="service-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1065/1065713.png"
              alt="Modern Manufacturing"
            />
          </div>
          <h3>Modern Manufacturing</h3>
          <p className="service-description">
      We produce high-precision furniture 
with eco-friendly materials. Our state-of-the-art manufacturing process 
ensures top-tier quality, durability, and sustainability.

          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
