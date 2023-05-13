const mongoose = require('mongoose');
const { Schema } = mongoose;

const BillSchema = new Schema({
  billId: {
    type: String,
    required: true
  },
  billAmount: {
    type: Number,
    required: true
  },
  billDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  customerId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Bill', BillSchema);
