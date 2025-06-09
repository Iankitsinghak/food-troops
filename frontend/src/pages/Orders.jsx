import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("https://foodtroop-backend.onrender.com/api/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4">Orders</h2>
      <ul className="space-y-2">
        {orders.map(order => (
          <li key={order._id} className="p-2 bg-gray-700 rounded">
            Order for: <strong>{order.customerName}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
