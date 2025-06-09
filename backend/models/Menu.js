import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  ingredients: [String],
  tags: [String],
  available: { type: Boolean, default: true }
});

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

export default MenuItem;
