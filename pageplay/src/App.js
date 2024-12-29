import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";

import ForgotPass from "./Pages/ForgotPass";
import Login from "./Pages/Login";
import Otp from "./Pages/Otp";
import SignUp from "./Pages/SignUp";
import StartingPage from "./Pages/StartingPage";

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
