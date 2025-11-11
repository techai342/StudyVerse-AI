import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomNavbar from "./components/BottomNavbar";
import FloatingActionButton from "./components/FloatingActionButton";

import Dashboard from "./pages/Dashboard";
import Study from "./pages/Study";
import AIExplanation from "./pages/AIExplanation";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header />

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/study" element={<Study />} />
          <Route path="/ai" element={<AIExplanation />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>

      <FloatingActionButton />
      <Footer />
      <BottomNavbar />
    </div>
  );
}

export default App;
