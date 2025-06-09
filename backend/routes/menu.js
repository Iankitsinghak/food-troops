import express from 'express';
const router = express.Router();

// Example menu items
const menuItems = [
  { id: 1, name: "Chicken Biryani", price: 180 },
  { id: 2, name: "Paneer Butter Masala", price: 150 },
  { id: 3, name: "Tandoori Roti", price: 20 },
];

// GET /api/menu
router.get('/', (req, res) => {
  res.json(menuItems);
});

export default router;
