import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [state, handleSubmit] = useForm("xlgjyovq");
  console.log(state);
  if (state.succeeded) {
    return (
      <div className="success-container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Thank You for Signing Up!</h2>
          <p>
            We've received your information and will get in touch with you soon.
          </p>
          <Link to="/" className="home-button">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2>Join Our Community</h2>
        <p className="subtitle">Help us make a difference</p>
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xlgjyovq"
          method="POST"
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input id="fullname" type="text" name="fullname" required />
              <ValidationError
                prefix="Full name"
                field="fullname"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" required />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Mobile Number</label>
              <input id="phone" type="tel" name="phone" required />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Address</label>
              <input id="message" name="message" required />
              <ValidationError
                prefix="Address"
                field="message"
                errors={state.errors}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="submit-btn"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
