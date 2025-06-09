
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            Order #{order._id.slice(-5)} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdersPage;
