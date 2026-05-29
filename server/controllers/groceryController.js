
const GroceryItem = require(
  "../models/GroceryItem"
);

// Add Grocery Item
exports.addGroceryItem =
  async (req, res) => {
    try {
      const {
        name,
        quantity,
        unit,
        category,
        expiryDate,
        minimumStock,
      } = req.body;

      const groceryItem =
        await GroceryItem.create({
          name,
          quantity,
          unit,
          category,
          expiryDate,
          minimumStock,
          userId:
            req.user.id,
        });

      res.status(201).json({
        message:
          "Grocery Item Added Successfully",
        groceryItem,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

// Get All Grocery Items
exports.getGroceryItems =
  async (req, res) => {
    try {
      const items =
        await GroceryItem.find(
          {
            userId:
              req.user.id,
          }
        );

      res.status(200).json(
        items
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

// Delete Grocery Item
exports.deleteGroceryItem =
  async (req, res) => {
    try {
      const item =
        await GroceryItem.findOneAndDelete(
          {
            _id:
              req.params.id,
            userId:
              req.user.id,
          }
        );

      if (!item) {
        return res.status(404).json({
          message:
            "Item not found",
        });
      }

      res.status(200).json({
        message:
          "Grocery Item Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

// Update Grocery Item
exports.updateGroceryItem =
  async (req, res) => {
    try {
      const updatedItem =
        await GroceryItem.findOneAndUpdate(
          {
            _id:
              req.params.id,
            userId:
              req.user.id,
          },
          req.body,
          {
            new: true,
          }
        );

      if (
        !updatedItem
      ) {
        return res.status(404).json({
          message:
            "Item not found",
        });
      }

      res.status(200).json({
        message:
          "Item Updated Successfully",
        updatedItem,
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

// Get Low Stock Items
exports.getLowStockItems =
  async (req, res) => {
    try {
      const items =
        await GroceryItem.find(
          {
            userId:
              req.user.id,
          }
        );

      const lowStockItems =
        items.filter(
          (item) =>
            item.quantity <=
            item.minimumStock
        );

      res.status(200).json(
        lowStockItems
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

// Expiry Alerts
exports.getExpiryItems =
  async (req, res) => {
    try {
      const items =
        await GroceryItem.find(
          {
            userId:
              req.user.id,
          }
        );

      const today =
        new Date();

      const next7Days =
        new Date();

      next7Days.setDate(
        today.getDate() + 7
      );

      const expiryItems =
        items.filter(
          (item) => {
            const expiryDate =
              new Date(
                item.expiryDate
              );

            return (
              expiryDate >=
                today &&
              expiryDate <=
                next7Days
            );
          }
        );

      res.status(200).json(
        expiryItems
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

