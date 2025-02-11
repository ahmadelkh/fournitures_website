import React from "react";

const RecommendationOptions = (props) => {
  const products = [
    { text: "🛋️ Elegant Sofa", id: 1 },
    { text: "💡 Modern Lamp", id: 2 },
    { text: "🪑 Wooden Chair", id: 3 },
  ];

  return (
    <div className="recommendation-options">
      {products.map((product) => (
        <button key={product.id} className="option-button">
          {product.text}
        </button>
      ))}
    </div>
  );
};

export default RecommendationOptions;
