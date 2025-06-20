const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User schema for customers
        required: true
    },
    items: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Products', // Assuming you have a MenuItem schema
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'preparing', 'out for delivery', 'delivered', 'cancelled'],
        default: 'pending'
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    paymentMethod: {
        type: String,
        enum: ['cash', 'credit card', 'paypal'],
        required: true
    },
    deliveryAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true }
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    deliveryDate: {
        type: Date
    },
    contactNumber: {
        type: String,
        required: true
    },
    specialInstructions: {
        type: String
    },
    isDelivered: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Create and export the Order model
module.exports = mongoose.model('Order', OrderSchema);
