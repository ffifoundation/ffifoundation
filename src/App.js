import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialIcons from "./components/SocialIcons";

import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const GetInvolved = lazy(() => import("./pages/GetInvolved"));
const Contact = lazy(() => import("./pages/Contact"));
const DonateNow = lazy(() => import("./pages/DonateNow"));
const Success = lazy(() => import("./pages/Success"));
const Transactions = lazy(() => import("./pages/Transactions"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <SocialIcons />

        <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<DonateNow />} />
            <Route path="/success" element={<Success />} />

            {/* Admin Login */}
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* Protected Admin Route */}
            <Route
              path="/transactions"
              element={
                <ProtectedRoute>
                  <Transactions />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
      <Toaster position="top-center" />
    </AuthProvider>
  );
};

export default App;
