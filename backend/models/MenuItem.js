import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  ingredients: [String],
  tags: [String],
  available: Boolean
});

export default mongoose.model('MenuItem', MenuItemSchema);
