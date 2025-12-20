import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./admin.css"; // ← CSS file
import toast from "react-hot-toast";
const AdminLogin = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const notify = () => toast.success("Login Successful!", { duration: 5000 });
  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:8081/api/auth/login",
        form
      );

      login(res.data.token, res.data.role);
      localStorage.setItem("adminToken", res.data.token);
      localStorage.setItem("role", "ADMIN");
      notify();
      navigate("/transactions");
    } catch (e) {
      toast.error("Invalid credentials", { duration: 5000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="login-input"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="login-btn" onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
