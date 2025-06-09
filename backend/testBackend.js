import mongoose from 'mongoose';
import dotenv from 'dotenv';
import MenuItem from './models/Menu.js';

dotenv.config();

async function test() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected for test');

    // Create a test menu item
    const item = new MenuItem({
      name: "Test Pizza",
      category: "Main Course",
      price: 199,
      ingredients: ["cheese", "tomato"],
      tags: ["test"],
      available: true,
    });

    const saved = await item.save();
    console.log('Saved item:', saved);

    // Fetch all menu items
    const allItems = await MenuItem.find();
    console.log('All menu items:', allItems);

    mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
