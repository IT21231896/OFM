const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
  
  itemName: {
    type: String,
    required: true
  },
  itemQty: {
    type: String,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  customerId: {
    type: String,
    required: true
  },
  orderid:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('order', OrderSchema);
