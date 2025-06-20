import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState([]);  // Initialize as an empty array
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/orders`);  // Fetching all orders
      console.log('Fetched orders:', response.data);  // Log the response
      
      // Ensure response.data is an array
      if (Array.isArray(response.data)) {
        setOrders(response.data);  // Set the orders state
      } else {
        console.error('Expected an array but received:', response.data);
        setOrders([]);  // Reset to empty array on error
      }

      setLoading(false);  // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching orders:', error);
      setError('Failed to load orders.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full p-6">
      <h1 className="font-semibold text-3xl my-2">Orders</h1>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Items
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Total Price
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Status
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(orders) && orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order._id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {order._id}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {order.customer?.name || 'Unknown'}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {order.items.map((item) => (
                    <div key={item.item._id}>
                      {item.item.name} (x{item.quantity})
                    </div>
                  ))}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  ${order.totalPrice.toFixed(2)}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                    className="border border-gray-300 p-1 rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="preparing">Preparing</option>
                    <option value="out for delivery">Out for Delivery</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No orders available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
