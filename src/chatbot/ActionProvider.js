class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;

    // Track user responses
    this.awaitingRecommendation = false;
    this.awaitingDeliveryCheck = false;
    this.awaitingCustomization = false;
  }

  // ✅ Function to Send Messages to Chatbot
  sendMessage = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // ✅ Greeting & Starting the Conversation
  handleGreeting = () => {
    const message = this.createChatBotMessage("Hello! How can I assist you today?", {
      widget: "quickQuestions",
    });
    this.sendMessage(message);
  };

  // ✅ Product Inquiry
  handleProductInquiry = () => {
    const message = this.createChatBotMessage(
      "We offer a variety of furniture: 🛋️ Sofas, 🪑 Chairs, 💡 Lamps, and more. Would you like recommendations?",
      { widget: "yesNoOptions" }
    );
    this.awaitingRecommendation = true;
    this.sendMessage(message);
  };

  // ✅ Smart Recommendations
  handleRecommendations = () => {
    const message = this.createChatBotMessage(
      "Here are some of our best-selling products:\n\n1️⃣ Elegant Sofa - $499\n2️⃣ Modern Lamp - $89\n3️⃣ Wooden Chair - $199\n\nClick the button below to view more!",
      { widget: "goToProducts" } // Redirect to Products page
    );
    this.awaitingRecommendation = false;
    this.sendMessage(message);
  };

  // ✅ Pricing Inquiry
  handlePricingInquiry = () => {
    const message = this.createChatBotMessage("Prices vary based on the product. Would you like to browse our full catalog?", {
      widget: "goToProducts",
    });
    this.sendMessage(message);
  };

  // ✅ Order Assistance
  handleOrderHelp = () => {
    const message = this.createChatBotMessage(
      "You can order directly on our website. If you need assistance, visit our contact page.",
      { widget: "goToContact" }
    );
    this.sendMessage(message);
  };

  // ✅ Store Location Inquiry
  handleLocation = () => {
    const message = this.createChatBotMessage(
      "Our branches are located in various locations. Click the button below to see more details.",
      { widget: "goToInfrastructure" }
    );
    this.sendMessage(message);
  };

  // ✅ Delivery Inquiry
  handleDelivery = () => {
    const message = this.createChatBotMessage(
      "Yes! We offer delivery services within selected areas. Would you like to check if we deliver to your location?",
      { widget: "yesNoOptions" }
    );
    this.awaitingDeliveryCheck = true;
    this.sendMessage(message);
  };

  // ✅ Customization Inquiry
  handleCustomization = () => {
    const message = this.createChatBotMessage(
      "Yes, we offer customization! You can choose colors, sizes, and materials. Would you like to speak with a consultant?",
      { widget: "yesNoOptions" }
    );
    this.awaitingCustomization = true;
    this.sendMessage(message);
  };

  // ✅ Handle Yes/No Responses for Follow-ups
  handleYesNoResponse = (message) => {
    if (this.awaitingRecommendation) {
      if (message.toLowerCase() === "yes") {
        this.awaitingRecommendation = false; // Reset state
        this.handleRecommendations();
      } else {
        this.awaitingRecommendation = false; // Reset state
        this.sendMessage(this.createChatBotMessage("Alright! Let me know if you need anything else."));
      }
    } 
    else if (this.awaitingDeliveryCheck) {
      if (message.toLowerCase() === "yes") {
        this.awaitingDeliveryCheck = false; // Reset state
        this.sendMessage(this.createChatBotMessage("Please enter your zip code, and I'll check availability."));
      } else {
        this.awaitingDeliveryCheck = false; // Reset state
        this.sendMessage(this.createChatBotMessage("Alright! Let me know if you need anything else."));
      }
    } 
    else if (this.awaitingCustomization) {
      if (message.toLowerCase() === "yes") {
        this.awaitingCustomization = false; // Reset state
        this.sendMessage(this.createChatBotMessage("Great! You can reach out to our consultants through the contact page.", {
          widget: "goToContact",
        }));
      } else {
        this.awaitingCustomization = false; // Reset state
        this.sendMessage(this.createChatBotMessage("No problem! Let me know if you need anything else."));
      }
    } 
    else {
      this.sendMessage(this.createChatBotMessage("Could you clarify your request?"));
    }
  };
  
}

export default ActionProvider;
