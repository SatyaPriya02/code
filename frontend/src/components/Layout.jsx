// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {   // ✅ must have export default
  return (
    <div
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.69), rgba(0, 0, 0, 0.89)), url('/rew.jpg')",
        // background: "linear-gradient(to right, #ee84ebff, #e8cde9ff)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", 
      }}
    >
      <Outlet />
    </div>
  );
}
