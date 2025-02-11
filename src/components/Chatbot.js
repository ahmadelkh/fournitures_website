import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import { FaRobot } from "react-icons/fa";

const ChatAssistant = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="chatbot-container">
      {/* ✅ Chatbot Popup - Adjusted for Full View */}
      {showChat && (
        <div className="chatbot-popup">
          <button className="chatbot-close" onClick={() => setShowChat(false)}>✖</button>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}

      {/* ✅ Floating Chatbot Icon */}
      <button className="chatbot-icon" onClick={() => setShowChat(!showChat)}>
        <FaRobot />
      </button>
    </div>
  );
};

export default ChatAssistant;
