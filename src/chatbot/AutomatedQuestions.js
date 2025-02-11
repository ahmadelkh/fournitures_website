import React from "react";

const AutomatedQuestions = (props) => {
  const options = [
    { text: "🛍️ What products do you have?", handler: props.actionProvider.handleProductInquiry, id: 1 },
    { text: "💰 What are your prices?", handler: props.actionProvider.handlePricingInquiry, id: 2 },
    { text: "🛒 How do I place an order?", handler: props.actionProvider.handleOrderHelp, id: 3 },
    { text: "📍 Where is your store?", handler: props.actionProvider.handleLocationInquiry, id: 4 },
  ];

  return (
    <div className="quick-options">
      {options.map((option) => (
        <button key={option.id} className="option-button" onClick={option.handler}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default AutomatedQuestions;
