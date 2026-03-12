// src/pages/Contact.jsx
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqepvprv");
  if (state.succeeded) {
    return (
      <div className="success-message">
        <h2>✅ Thank you for contacting us!</h2>
        <p>We’ve received your message and will get back to you shortly.</p>
        <Link to="/" className="back-home-button">
          ← Back to Home
        </Link>
      </div>
    );
  }
  return (
    <section className="contact">
      <h1>Get In Touch With Us</h1>
      <p>
        Have questions? We'd love to hear from you. Send us a message and we'll
        respond as soon as possible.
      </p>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mqepvprv"
            method="POST"
          >
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us how we can help..."
              rows="6"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="map-container">
          <iframe
            title="NGO Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30551.150665979767!2d80.12974762152456!3d16.83162215122407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35a7c8ab780a41%3A0x4db4d3fde5bca4f0!2sJayanthipuram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1743956238911!5m2!1sen!2sin"
            width="100%"
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
