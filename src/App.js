import React, { Suspense, lazy } from "react";
import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialIcons from "./components/SocialIcons";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Signup from "./components/Signup";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const GetInvolved = lazy(() => import("./pages/GetInvolved"));
const Contact = lazy(() => import("./pages/Contact"));
const DonateNow = lazy(() => import("./pages/DonateNow"));
const Success = lazy(() => import("./pages/Success"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Testimonies = lazy(() => import("./pages/Testimonies"));

// Lazy load program pages
const RuralTransformation = lazy(() => import("./pages/RuralTransformation"));
const Health = lazy(() => import("./pages/Health"));
const Education = lazy(() => import("./pages/Education"));
const SportsDevelopment = lazy(() => import("./pages/SportsDevelopment"));
const WomenEmpowerment = lazy(() => import("./pages/WomenEmpowerment"));
const DisasterManagement = lazy(() => import("./pages/DisasterManagement"));
const ArtsCultureHeritage = lazy(() => import("./pages/ArtsCultureHeritage"));
const UrbanRenewal = lazy(() => import("./pages/UrbanRenewal"));

const App = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Navbar />
        <SocialIcons />
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading...</p>
              </div>
            </div>
          }
        >
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<DonateNow />} />
            <Route path="/success" element={<Success />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/testimonies" element={<Testimonies />} />

            {/* Program routes */}
            <Route
              path="/programs/rural-transformation"
              element={<RuralTransformation />}
            />
            <Route path="/programs/health" element={<Health />} />
            <Route path="/programs/education" element={<Education />} />
            <Route
              path="/programs/sports-development"
              element={<SportsDevelopment />}
            />
            <Route
              path="/programs/women-empowerment"
              element={<WomenEmpowerment />}
            />
            <Route
              path="/programs/disaster-management"
              element={<DisasterManagement />}
            />
            <Route
              path="/programs/arts-culture-heritage"
              element={<ArtsCultureHeritage />}
            />
            <Route path="/programs/urban-renewal" element={<UrbanRenewal />} />

            {/* Admin Login */}
            {/* <Route path="/admin-login" element={<AdminLogin />} /> */}

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
      </HashRouter>
      <Toaster position="top-center" />
    </AuthProvider>
  );
};

export default App;
