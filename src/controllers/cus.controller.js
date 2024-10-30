const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema(
  {
    cusId: { type: String, required: true, unique: true },
    cusName: { type: String, required: true, },
    cusEmail: { type: String, required: true },
    cusPhone: { type: String, required: true },
    cusAddress: { type: String, required: true },
    cusBirthday: { type: String, required: true,},
    cusGender: { type: Number, required: true },
  },
  { collection: 'Customer' } 
);

const Customer = mongoose.model('Customer', statusSchema);

module.exports = Customer;
