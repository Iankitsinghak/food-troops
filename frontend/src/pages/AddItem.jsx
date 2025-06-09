import { useState } from 'react';
import axios from 'axios';

export default function AddItem() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://foodtroop-backend.onrender.com/api/menus", {
        name,
        price: parseFloat(price)
      });
      alert("Item added!");
      setName('');
      setPrice('');
    } catch (err) {
      alert("Failed to add item.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl mb-2">Add New Menu Item</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Item name" className="p-2 w-full bg-gray-800 border border-gray-600" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" type="number" className="p-2 w-full bg-gray-800 border border-gray-600" />
      <button type="submit" className="bg-green-600 p-2 rounded">Add</button>
    </form>
  );
}
