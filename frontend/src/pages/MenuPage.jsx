
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MenuPage() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get('/api/menu')
      .then(res => setMenu(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <ul>
        {menu.map(item => (
          <li key={item._id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuPage;
