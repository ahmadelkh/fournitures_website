import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/infrastructure.css";

// Import city images
import KinshasaImg from "../assets/city.webp";
import LubumbashiImg from "../assets/lub.jpeg";
import KolweziImg from "../assets/kolwesi.jpeg";
import LikasiImg from "../assets/likasi.jpeg";

const Infrastructure = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // City Data
  const cities = [
    {
      name: "Kinshasa",
      img: KinshasaImg,
      link: "https://maps.app.goo.gl/4GZSGFMr2BLiksag8?g_st=com.google.maps.preview.copy",
      description: "Home to a modern manufacturing plant .",
    },
    {
      name: "Lubumbashi",
      img: LubumbashiImg,
      link: "https://maps.app.goo.gl/7LX2StnjuF8LSbWUA?g_st=iw",
      description: "One of the largest and most modern furniture showrooms in the DRC.",
    },
    {
      name: "Kolwezi",
      img: KolweziImg,
      link: "https://goo.gl/maps/EXAMPLE3",
      description: "A specialized production plant of 2000 m² for custom manufacturing.",
    },
    {
      name: "Likasi",
      img: LikasiImg,
      link: "https://goo.gl/maps/EXAMPLE4",
      description: "Showroom with a 2000 m² display area.",
    },
  ];

  return (
    <section id="infrastructure" className="infrastructure-section">
      <h2 className="infra-title">Our Infrastructure</h2>
      <p className="infra-description">
        We operate world-class facilities in strategic cities, ensuring the highest
        production quality and efficiency.
      </p>

      {/* Interactive City Boxes */}
      <div className="infra-grid">
        {cities.map((city, index) => (
          <a key={index} href={city.link} target="_blank" rel="noopener noreferrer" className="infra-box">
            <img src={city.img} alt={city.name} className="infra-image" />
            <div className="infra-content">
              <h3>{city.name}</h3>
              <p>{city.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Infrastructure;
