import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Orders from './pages/Orders';
import AddItem from './pages/AddItem';

export default function App() {
  return (
    <Router>
      <div className="p-4 bg-gray-800 min-h-screen">
        <nav className="mb-6 flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/add">Add Item</Link>
          <Link to="/orders">Orders</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}
