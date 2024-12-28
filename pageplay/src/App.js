import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import StartingPage from "./Pages/StartingPage";
import ForgotPass from "./Pages/ForgotPass";
import Otp from "./Pages/Otp";
import Nav from "./Components/Nav.js";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Nav />
      )}

      <main>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/otp" element={<Otp />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
