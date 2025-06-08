import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/menu").then(res => setMenuItems(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map(item => (
          <div key={item._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-700">{item.category} - ₹{item.price}</p>
            <p className="text-xs text-gray-500">Tags: {item.tags.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
