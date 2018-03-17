const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customerName: { type: String, required: true },
  orderLocation: { type: String, required: true },
  orderDetails: { type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
