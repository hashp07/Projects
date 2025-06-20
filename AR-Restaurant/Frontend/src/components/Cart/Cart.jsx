import React, { useState } from 'react';

function Cart() {
  const initialCartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      quantity: 2, // Add quantity for each product
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      quantity: 1, // Add quantity for each product
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Add more items as needed
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handlePlaceOrder = () => {
    // Logic for placing the order
    console.log('Order placed:', cartItems);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-wrap justify-center">
        {cartItems.map(item => (
          <div
            key={item.id}
            className="max-w-xs w-full bg-white rounded-lg shadow-md overflow-hidden m-4"
          >
            <img
              className="w-full h-48 object-cover"
              src={item.imageUrl}
              alt={item.name}
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{item.name}</h2>
              <p className="text-gray-700 text-base">${item.price.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <span className="mr-2">Quantity:</span>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value);
                    if (newQuantity > 0) {
                      setCartItems(prevItems =>
                        prevItems.map(cartItem =>
                          cartItem.id === item.id
                            ? { ...cartItem, quantity: newQuantity }
                            : cartItem
                        )
                      );
                    }
                  }}
                  className="border border-gray-300 rounded w-16 text-center"
                />
              </div>
              <button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePlaceOrder}
        className="mt-6 w-full max-w-xs bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Place Order
      </button>
    </div>
  );
}

export default Cart;
