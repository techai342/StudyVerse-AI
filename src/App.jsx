import React from "react";
import DashboardOverview from "./components/DashboardOverview";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
        StudyVerse AI
      </header>
      <main className="p-6">
        <DashboardOverview />
      </main>
      <footer className="bg-gray-200 text-center p-4 mt-10">
        © 2025 StudyVerse AI
      </footer>
    </div>
  );
}

export default App;
