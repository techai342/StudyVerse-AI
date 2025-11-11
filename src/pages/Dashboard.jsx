import React from "react";
import DashboardOverview from "../components/DashboardOverview";
import CalendarWidget from "../components/CalendarWidget";
import CurrentReminder from "../components/CurrentReminder";
import DailyGoalTracker from "../components/DailyGoalTracker";
import ChatBot from "../components/ChatBot";
import MotivationBooster from "../components/MotivationBooster";

function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardOverview />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CalendarWidget />
        <CurrentReminder />
        <DailyGoalTracker />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChatBot />
        <MotivationBooster />
      </div>
    </div>
  );
}

export default Dashboard;
