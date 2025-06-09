
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">FoodTroop</div>
      <div className="space-x-4">
        <Link to="/">Dashboard</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/orders">Orders</Link>
      </div>
    </nav>
  );
}

export default Navbar;
