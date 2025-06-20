const express = require("express");
const router = express.Router();

// Controllers (These should contain the actual logic for handling requests)
const {
  handleGetOrders,
  handleGetOrderById,
  handlePlaceOrder,
  handleUpdateOrderStatus,
  handleDeleteOrder,
} = require("../Controllers/Order"); // Assuming you have a controller file for handling orders

// Routes for orders

// Get all orders and place a new order
router
  .route("/orders")
  .get(handleGetOrders)  // Get all orders
  .post(handlePlaceOrder);  // Place a new order

// Get, update, and delete a specific order by ID
router
  .route("/orders/:id")
  .get(handleGetOrderById)    // Get an order by ID
  .put(handleUpdateOrderStatus)  // Update an order (e.g., update status)
  .delete(handleDeleteOrder); // Delete an order by ID

module.exports = router;
