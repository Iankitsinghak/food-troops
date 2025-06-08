const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem", required: true },
  quantity: { type: Number, required: true },
  customization: String,
  notes: String
});

const OrderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  items: [OrderItemSchema],
  status: {
    type: String,
    enum: ["Placed", "In Preparation", "Ready", "Delivered"],
    default: "Placed"
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
