import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import StartingPage from "./Pages/StartingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent /> {/* Moved the logic inside AppContent */}
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const location = useLocation(); // Now inside the BrowserRouter context
  const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
