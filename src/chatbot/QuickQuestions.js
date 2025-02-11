import React from "react";

const QuickQuestions = (props) => {
  const options = [
    { text: "📦 What products do you have?", handler: props.actionProvider.handleProductInquiry, id: 1 },
    { text: "💰 What are your prices?", handler: props.actionProvider.handlePricingInquiry, id: 2 },
    { text: "🛒 How do I place an order?", handler: props.actionProvider.handleOrderHelp, id: 3 },
    { text: "🚚 Do you offer delivery?", handler: props.actionProvider.handleDelivery, id: 4 },
    { text: "📍 Where is your store?", handler: props.actionProvider.handleLocation, id: 5 },
    { text: "🎨 Can I customize my furniture?", handler: props.actionProvider.handleCustomization, id: 6 },
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

export default QuickQuestions;
