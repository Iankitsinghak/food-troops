import React, { useEffect, useState } from "react";
import axios from "axios";

export default function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [menuMap, setMenuMap] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/api/menu").then(res => {
      const map = {};
      res.data.forEach(item => {
        map[item._id] = item.name;
      });
      setMenuMap(map);
    });

    axios.get("http://localhost:5000/api/orders").then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <div className="space-y-4">
        {orders.map(order => (
          <div key={order._id} className="bg-white p-4 rounded shadow">
            <p><strong>Customer:</strong> {order.customerName}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Items:</strong></p>
            <ul className="list-disc pl-5">
              {order.items.map((item, i) => (
                <li key={i}>{item.quantity} x {menuMap[item.itemId] || item.itemId}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
