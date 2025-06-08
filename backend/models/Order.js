const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem", required: true },
      quantity: { type: Number, required: true },
      customizations: { type: String, default: "" }
    }
  ],
  status: { type: String, default: "Placed" },
  notes: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
