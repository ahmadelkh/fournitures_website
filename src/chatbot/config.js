import { createChatBotMessage } from "react-chatbot-kit";
import QuickQuestions from "./QuickQuestions";
import YesNoOptions from "./YesNoOptions";
import RecommendationOptions from "./RecommendationOptions";
import GoToProducts from "./GoToProducts";
import GoToContact from "./GoToContact";
import GoToInfrastructure from "./GoToInfrastructure";

const config = {
  botName: "F+ Assistant",
  initialMessages: [
    createChatBotMessage("Hello! How can I assist you today?", {
      widget: "quickQuestions",
    }),
  ],
  widgets: [
    {
      widgetName: "quickQuestions",
      widgetFunc: (props) => <QuickQuestions {...props} />,
    },
    {
      widgetName: "yesNoOptions",
      widgetFunc: (props) => <YesNoOptions {...props} />, // ✅ Handles Yes/No
    },
    {
      widgetName: "recommendationOptions",
      widgetFunc: (props) => <RecommendationOptions {...props} />,
    },
    {
      widgetName: "goToProducts",
      widgetFunc: (props) => <GoToProducts {...props} />, // ✅ Button to Products
    },
    {
      widgetName: "goToContact",
      widgetFunc: (props) => <GoToContact {...props} />,
    },
    {
      widgetName: "goToInfrastructure",
      widgetFunc: (props) => <GoToInfrastructure {...props} />,
    },
  ],
};

export default config;
