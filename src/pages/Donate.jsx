import { useState } from "react";
import "./donate.css"; // <-- Import CSS for styling
import { useNavigate } from "react-router-dom";
import api from "../context/api";
import toast from "react-hot-toast";
import axios from "axios";

const Donate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const notify = () =>
    toast.error("Failed to load Razorpay", { duration: 5000 });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  // const loadRazorpay = () => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //     script.onload = () => resolve(true);
  //     script.onerror = () => resolve(false);
  //     document.body.appendChild(script);
  //   });
  // };
  // https://iptv-org.github.io/iptv/index.m3u
  // const createOrder = async () => {
  //   const res = await api.post("/api/donations/create-order", form);
  //   return res.data;
  // };

  // const handlePayment = async () => {
  //   setLoading(true);
  //   const isLoaded = await loadRazorpay();
  //   if (!isLoaded) {
  //     notify();
  //     setLoading(false);
  //     return;
  //   }

  //   const data = await createOrder();

  //   const options = {
  //     key: data.razorpayKey,
  //     amount: data.amount,
  //     currency: "INR",
  //     name: "Fortune Foundation",
  //     description: "Donation Payment",
  //     order_id: data.orderId,
  //     theme: {
  //       color: "#33cc4a", // Customize theme color
  //     },
  //     handler: async function (response) {
  //       await api.post("/api/donations/verify", {
  //         razorpayOrderId: response.razorpay_order_id,
  //         razorpayPaymentId: response.razorpay_payment_id,
  //         razorpaySignature: response.razorpay_signature,
  //       });

  //       navigate("/success"); // redirect after success
  //     },
  //   };

  //   const rzp = new window.Razorpay(options);
  //   rzp.open();
  // };
  const handlePayment = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8081/api/donations/ccavenue",
        {
          donorName: form.name,
          donorEmail: form.email,
          donorPhone: form.phone,
          amount: Number(form.amount).toFixed(2),
        }
      );

      const formEl = document.createElement("form");
      formEl.method = "POST";
      formEl.action =
        "https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction";

      const encInput = document.createElement("input");
      encInput.type = "hidden";
      encInput.name = "encRequest";
      encInput.value = res.data.encRequest;
      const accessInput = document.createElement("input");
      accessInput.type = "hidden";
      accessInput.name = "accessCode";
      accessInput.value = res.data.accessCode;
      formEl.appendChild(encInput);
      formEl.appendChild(accessInput);
      document.body.appendChild(formEl);

      formEl.submit();
    } catch (e) {
      alert("Payment initialization failed");
    }
  };

  return (
    <div className="donate-container">
      <div className="donate-card">
        <h2 className="donate-title">Donate to Support Us ❤️</h2>
        <input
          className="donate-input"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="donate-input"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="donate-input"
          type="text"
          placeholder="Your Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          className="donate-input"
          type="number"
          placeholder="Amount (₹)"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <button
          className="donate-btn"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? "Processing..." : "Donate Now"}
        </button>
      </div>
    </div>
  );
};

export default Donate;
