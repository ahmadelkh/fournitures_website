class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      this.actionProvider.handleGreeting();
    } else if (lowerCaseMessage.includes("product") || lowerCaseMessage.includes("items")) {
      this.actionProvider.handleProductInquiry();
    } else if (lowerCaseMessage.includes("price") || lowerCaseMessage.includes("cost")) {
      this.actionProvider.handlePricingInquiry();
    } else if (lowerCaseMessage.includes("order") || lowerCaseMessage.includes("buy")) {
      this.actionProvider.handleOrderHelp();
    } else if (lowerCaseMessage.includes("location") || lowerCaseMessage.includes("store")) {
      this.actionProvider.handleLocation();
    } else if (lowerCaseMessage.includes("delivery") || lowerCaseMessage.includes("shipping")) {
      this.actionProvider.handleDelivery();
    } else if (lowerCaseMessage.includes("customization") || lowerCaseMessage.includes("personalized")) {
      this.actionProvider.handleCustomization();
    } else {
      this.actionProvider.sendMessage(
        this.actionProvider.createChatBotMessage("I'm not sure how to answer that. Can you ask in another way?")
      );
    }
  }
}

export default MessageParser;
