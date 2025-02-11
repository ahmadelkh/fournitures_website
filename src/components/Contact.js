import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        Have a question? Want to collaborate? Reach out to us!
      </p>

      <form className="contact-form" data-aos="fade-up">
        <div className="input-group">
          <input type="text" required />
          <label>Name</label>
        </div>

        <div className="input-group">
          <input type="email" required />
          <label>Email</label>
        </div>

        <div className="input-group">
          <textarea required></textarea>
          <label>Message</label>
        </div>

        <button type="submit" className="send-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
