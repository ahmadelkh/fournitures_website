import React, { useState, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";
import ScrollToTop from "./components/ScrollToTop";
import Products from "./components/Products"; // Product Catalog
import StatsSection from "./components/StatsSection";

// Lazy Load Components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Infrastructure = lazy(() => import("./components/Infrastructure"));
const Contact = lazy(() => import("./components/Contact"));
const ChatAssistant = lazy(() => import("./components/Chatbot")); // ✅ Chatbot

function App() {
  const [isChatOpen, setChatOpen] = useState(false); // ✅ Manage Chatbot State

  return (
    <div>
      <Navbar />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Hero toggleChat={() => setChatOpen(!isChatOpen)} /> {/* ✅ Pass Function */}
        <ChatAssistant isOpen={isChatOpen} toggleChat={() => setChatOpen(!isChatOpen)} />
        <Services />
        <About />
        <StatsSection />
        <Infrastructure />
        <Products />
        <Contact />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
