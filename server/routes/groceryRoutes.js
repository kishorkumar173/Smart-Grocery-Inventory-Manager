
const express =
  require("express");

const router =
  express.Router();

const {
  addGroceryItem,
  getGroceryItems,
  deleteGroceryItem,
  updateGroceryItem,
  getLowStockItems,
  getExpiryItems,
} = require(
  "../controllers/groceryController"
);

// Import auth middleware
const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

// Protected Routes
router.post(
  "/add",
  authMiddleware,
  addGroceryItem
);

router.get(
  "/all",
  authMiddleware,
  getGroceryItems
);

router.delete(
  "/delete/:id",
  authMiddleware,
  deleteGroceryItem
);

router.put(
  "/update/:id",
  authMiddleware,
  updateGroceryItem
);

router.get(
  "/low-stock",
  authMiddleware,
  getLowStockItems
);

router.get(
  "/expiry-alerts",
  authMiddleware,
  getExpiryItems
);

module.exports =
  router;

