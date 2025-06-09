
const mongoose = require('mongoose');

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

module.exports = mongoose.model('Order', OrderSchema);
