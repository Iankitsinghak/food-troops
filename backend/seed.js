import mongoose from 'mongoose';
import dotenv from 'dotenv';
import MenuItem from './models/MenuItem.js';
import Order from './models/Order.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('MongoDB connected 🌱');

  // Clear old data
  await MenuItem.deleteMany();
  await Order.deleteMany();

  // Seed menu items
  const menuItems = [
    {
      name: 'Margherita Pizza',
      category: 'Pizza',
      price: 299,
      ingredients: ['Cheese', 'Tomato'],
      tags: ['vegetarian'],
      available: true
    },
    {
      name: 'Veg Biryani',
      category: 'Rice',
      price: 249,
      ingredients: ['Rice', 'Vegetables', 'Spices'],
      tags: ['spicy', 'veg'],
      available: true
    },
    {
      name: 'Butter Chicken',
      category: 'Curry',
      price: 349,
      ingredients: ['Chicken', 'Butter', 'Cream'],
      tags: ['non-veg'],
      available: true
    }
  ];

  const orders = [
    {
      items: [
        { itemId: '1', name: 'Margherita Pizza', quantity: 2, notes: 'Extra cheese' },
        { itemId: '2', name: 'Veg Biryani', quantity: 1 }
      ],
      status: 'Placed'
    }
  ];

  await MenuItem.insertMany(menuItems);
  await Order.insertMany(orders);

  console.log('Data seeded successfully ✅');
  process.exit();
}).catch((err) => {
  console.error('MongoDB error:', err);
  process.exit(1);
});
