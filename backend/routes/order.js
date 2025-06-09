
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

router.post('/', async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
});

router.put('/:id', async (req, res) => {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

module.exports = router;
