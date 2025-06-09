
const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

router.get('/', async (req, res) => {
    const items = await MenuItem.find();
    res.json(items);
});

router.post('/', async (req, res) => {
    const newItem = new MenuItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
});

router.put('/:id', async (req, res) => {
    const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

router.delete('/:id', async (req, res) => {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

module.exports = router;
