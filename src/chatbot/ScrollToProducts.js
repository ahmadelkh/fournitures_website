import React from "react";

const ScrollToProducts = () => {
  const scrollToProducts = () => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className="option-button" onClick={scrollToProducts}>📦 View Products</button>
  );
};

export default ScrollToProducts;
