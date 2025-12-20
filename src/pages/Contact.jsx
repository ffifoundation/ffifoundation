// src/pages/Contact.jsx
import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file for styling

const Contact = () => {
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
    console.log(formData); // This is where you would handle form submission (e.g., send to backend)
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Fill out the form below or reach out to us
        directly.
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>

        {/* Google Map */}
        <div className="map-container">
          <iframe
            title="NGO Location"
            // <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            // https://www.google.com/maps/place/Jayanthipuram,+Andhra+Pradesh/@16.8316222,80.1297476,14z/data=!3m1!4b1!4m6!3m5!1s0x3a35a7c8ab780a41:0x4db4d3fde5bca4f0!8m2!3d16.8286991!4d80.1540226!16s%2Fg%2F1213vdp9?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30551.150665979767!2d80.12974762152456!3d16.83162215122407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35a7c8ab780a41%3A0x4db4d3fde5bca4f0!2sJayanthipuram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1743956238911!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
