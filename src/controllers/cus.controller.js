const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema(
  {
    cusId: { type: String, required: true, unique: true },
    cusName: { type: String, required: true, },
    cusEmail: { type: String, required: true },
    cusPhone: { type: String},
    cusAddress: { type: String},
    cusBirthday: { type: Date, required: true,},
    cusGender: { type: Number, required: true },
  },
  { collection: 'Customer' } 
);

const Customer = mongoose.model('Customer', statusSchema);

module.exports = Customer;
