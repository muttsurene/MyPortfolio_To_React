import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="flex flex-col bg-black/30">
      <img
        className="fixed object-cover inset-0 -z-10"
        src="https://images.unsplash.com/photo-1697300357972-2a37a8995cb4?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
      />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
