import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("admin_token"));
  const [role, setRole] = useState(localStorage.getItem("admin_role"));

  const login = (token, role) => {
    localStorage.setItem("admin_token", token);
    localStorage.setItem("admin_role", role);
    setToken(token);
    setRole(role);
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_role");
    setToken(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
