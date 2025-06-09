import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  items: [{
    itemId: String,
    name: String,
    quantity: Number,
    notes: String
  }],
  status: { type: String, default: 'Placed' },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Order', OrderSchema);
