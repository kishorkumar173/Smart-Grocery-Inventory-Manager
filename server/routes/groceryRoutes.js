const express = require("express");

const {
  addGroceryItem,
  getGroceryItems,
  deleteGroceryItem,
  updateGroceryItem,
  getLowStockItems,
  getExpiryItems,
} = require("../controllers/groceryController");

const router = express.Router();

// Add item
router.post("/add", addGroceryItem);

// Get items
router.get("/all", getGroceryItems);

// Delete item
router.delete(
  "/delete/:id",
  deleteGroceryItem
);
router.put(
  "/update/:id",
  updateGroceryItem
);
router.get(
  "/low-stock",
  getLowStockItems
);
router.get(
  "/expiry-alerts",
  getExpiryItems
);
module.exports = router;