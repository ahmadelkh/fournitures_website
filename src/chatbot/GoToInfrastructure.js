import React from "react";

const GoToInfrastructure = () => {
  const scrollToInfrastructure = () => {
    const section = document.getElementById("infrastructure");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="quick-options">
      <button className="option-button" onClick={scrollToInfrastructure}>
        📍 Go to Store Location
      </button>
    </div>
  );
};

export default GoToInfrastructure;
