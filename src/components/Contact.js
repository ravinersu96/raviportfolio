// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>
        If you'd like to get in touch, feel free to reach out via email or
        connect with me on LinkedIn!
      </p>
      <a href="mailto:your.email@example.com">your.email@example.com</a>
      <br />
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </section>
  );
};

export default Contact;
