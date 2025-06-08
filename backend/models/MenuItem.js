const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  price: { type: Number, required: true },
  ingredients: [String],
  tags: [String], // e.g. vegan, spicy
  available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("MenuItem", MenuItemSchema);
