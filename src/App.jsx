import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomNavbar from "./components/BottomNavbar";
import DashboardOverview from "./components/DashboardOverview";
import ChatBot from "./components/ChatBot";
import CalendarWidget from "./components/CalendarWidget";
import CurrentReminder from "./components/CurrentReminder";
import DailyGoalTracker from "./components/DailyGoalTracker";
import MotivationBooster from "./components/MotivationBooster";
import FloatingActionButton from "./components/FloatingActionButton";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Header */}
      <Header />

      {/* Main Dashboard Area */}
      <main className="p-6 space-y-6">
        {/* Overview Widgets */}
        <DashboardOverview />

        {/* Individual Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CalendarWidget />
          <CurrentReminder />
          <DailyGoalTracker />
        </div>

        {/* ChatBot & Motivation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChatBot />
          <MotivationBooster />
        </div>

        {/* Loader Example */}
        <Loader />
      </main>

      {/* Floating Button */}
      <FloatingActionButton />

      {/* Footer */}
      <Footer />

      {/* Bottom Navbar */}
      <BottomNavbar />
    </div>
  );
}

export default App;
