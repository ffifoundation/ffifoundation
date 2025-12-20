import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = (field, value) => {
    let error = "";

    if (!value.trim()) {
      error = `${field} is required`;
    } else {
      if (
        field === "email" &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
      ) {
        error = "Invalid email format";
      }
      if (field === "mobile" && !/^\d{10}$/.test(value)) {
        error = "Mobile number must be 10 digits";
      }
    }

    return error;
  };

  // Handle input change with real-time validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate field immediately on change
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validate all fields
    Object.keys(formData).forEach((field) => {
      newErrors[field] = validate(field, formData[field]);
    });

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.values(newErrors).every((err) => err === "")) {
      alert("Signup Successful!");
      console.log(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
