import React from "react";

function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold text-lg mb-2">Today's Goals</h2>
        <p>3 tasks remaining</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold text-lg mb-2">Calendar</h2>
        <p>Upcoming: AI Study Session at 5 PM</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-bold text-lg mb-2">Motivation</h2>
        <p>"Keep learning, keep growing!"</p>
      </div>
    </div>
  );
}

export default DashboardOverview;
