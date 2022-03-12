const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    cart: {
        type: Array,
        required: true
    }
})

const Order = mongoose.model('order', orderSchema);

module.exports = Order;