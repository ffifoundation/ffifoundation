// src/components/ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Send to backend or email API
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit" className="btn primary">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
