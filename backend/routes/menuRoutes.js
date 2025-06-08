const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// Get all menu items with optional filters and pagination
router.get("/", async (req, res) => {
  try {
    const { name, category, tags, minPrice, maxPrice, page = 1, limit = 10 } = req.query;
    const query = {};

    if (name) query.name = { $regex: name, $options: "i" };
    if (category) query.category = category;
    if (tags) query.tags = { $in: tags.split(",") };
    if (minPrice || maxPrice) query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);

    const menuItems = await MenuItem.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add new menu item
router.post("/", async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update menu item by id
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ error: "Menu item not found" });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete menu item by id (soft delete by setting available: false)
router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await MenuItem.findByIdAndUpdate(req.params.id, { available: false }, { new: true });
    if (!deletedItem) return res.status(404).json({ error: "Menu item not found" });
    res.json({ message: "Menu item marked unavailable" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
