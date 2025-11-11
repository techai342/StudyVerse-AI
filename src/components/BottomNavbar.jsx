import React from "react";
import { Link, useLocation } from "react-router-dom";

function BottomNavbar() {
  const location = useLocation();
  const activeStyle = "text-blue-600 font-bold";

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow p-3 flex justify-around">
      <Link to="/" className={location.pathname === "/" ? activeStyle : ""}>
        Dashboard
      </Link>
      <Link to="/study" className={location.pathname === "/study" ? activeStyle : ""}>
        Study
      </Link>
      <Link to="/ai" className={location.pathname === "/ai" ? activeStyle : ""}>
        AI Q&A
      </Link>
      <Link to="/settings" className={location.pathname === "/settings" ? activeStyle : ""}>
        Settings
      </Link>
    </nav>
  );
}

export default BottomNavbar;
