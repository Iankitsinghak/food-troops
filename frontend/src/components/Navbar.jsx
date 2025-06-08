import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Restaurant Manager</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Menu</Link>
        <Link to="/orders" className="hover:underline">Orders</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      </div>
    </nav>
  );
}
