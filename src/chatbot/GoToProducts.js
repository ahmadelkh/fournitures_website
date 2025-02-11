import React from "react";

const GoToProducts = (props) => {
  const handleGoToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="option-button" onClick={handleGoToProducts}>
      🛍️ View Products
    </button>
  );
};

export default GoToProducts;
