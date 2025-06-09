import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get("https://foodtroop-backend.onrender.com/api/menus")
      .then(res => setMenu(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4">Menu Items</h2>
      <ul className="space-y-2">
        {menu.map(item => (
          <li key={item._id} className="p-2 bg-gray-700 rounded">
            <strong>{item.name}</strong> - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
