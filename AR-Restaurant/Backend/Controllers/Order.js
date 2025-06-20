const Order = require("../Models/Order"); // Assuming you have an Order model

// Get all orders
const handleGetOrders = async (req, res) => {
  try {
    const orders = await Order.find(); // Fetch all orders from the database
    res.status(200).json(orders); // Respond with the orders
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
};

// Get order by ID
const handleGetOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id); // Fetch order by ID
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order); // Respond with the order details
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error: error.message });
  }
};

// Place a new order
const handlePlaceOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body); // Create a new order with the request body
    const savedOrder = await newOrder.save(); // Save the order to the database
    res.status(201).json(savedOrder); // Respond with the saved order
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error: error.message });
  }
};

// Update an order's status or details
const handleUpdateOrderStatus = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update order
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(updatedOrder); // Respond with the updated order
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error: error.message });
  }
};

// Delete an order
const handleDeleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id); // Delete order by ID
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" }); // Respond with success message
  } catch (error) {
    res.status(500).json({ message: "Error deleting order", error: error.message });
  }
};

module.exports = {
  handleGetOrders,
  handleGetOrderById,
  handlePlaceOrder,
  handleUpdateOrderStatus,
  handleDeleteOrder
};
