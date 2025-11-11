import React from "react";

function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow p-3 flex justify-around">
      <button>Dashboard</button>
      <button>Study</button>
      <button>AI Q&A</button>
      <button>Settings</button>
    </nav>
  );
}

export default BottomNavbar;
