import React from "react";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import "./Success.css";
import { Link } from "react-router-dom";

const Success = () => {

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="checkmark-animation">✔</div>

        <h2>Payment Successful 🎉</h2>
        <p>Thank you for your kind donation!</p>

        <Link to="/" className="success-btn">Go to Home</Link>
      </div>
    </div>
  );
};

export default Success;
