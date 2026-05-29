const mongoose = require("mongoose");

const groceryItemSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    name: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    unit: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    expiryDate: {
      type: Date,
    },

    minimumStock: {
      type: Number,
      default: 1,
    },
    userId: {
  type:
    mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "GroceryItem",
  groceryItemSchema
);