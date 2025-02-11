import React from "react";

const GoToContact = (props) => {
  const handleGoToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="option-button" onClick={handleGoToContact}>
      📞 Contact Us
    </button>
  );
};

export default GoToContact;
