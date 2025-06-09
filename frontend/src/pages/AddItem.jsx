import { useState } from 'react';
import axios from 'axios';

export default function AddItem() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !category) {
      alert("Please fill all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post("https://foodtroop-backend.onrender.com/api/menu", {
        name,
        price: parseFloat(price),
        category
      });
      alert("Item added!");
      setName('');
      setPrice('');
      setCategory('');
    } catch (err) {
      alert("Failed to add item.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4 text-white">Add New Menu Item</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Item name"
        className="p-2 w-full bg-gray-800 border border-gray-600 text-white"
      />
      <input
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="Price"
        type="number"
        className="p-2 w-full bg-gray-800 border border-gray-600 text-white"
      />
      <input
        value={category}
        onChange={e => setCategory(e.target.value)}
        placeholder="Category"
        className="p-2 w-full bg-gray-800 border border-gray-600 text-white"
      />
      <button
        type="submit"
        disabled={loading}
        className={`p-2 rounded ${loading ? 'bg-gray-600' : 'bg-green-600 hover:bg-green-700'}`}
      >
        {loading ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
}
