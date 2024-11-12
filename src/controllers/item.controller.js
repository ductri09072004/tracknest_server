const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Decimal128 } = mongoose.Types;

// Định nghĩa schema cho DeliveryStatus
const statusSchema = new Schema(
  {
    Item_ID: { type: String, required: true, unique: true },
    Item_Name: { type: String, required: true },
    Item_Weight: { type: Decimal128, required: true },
    Item_AllValue: { type: Number, required: true },
    Order_ID: { type: String, required: true, nique: true },
  },
  { collection: 'OrderDetail' } // Đảm bảo dùng đúng collection trong MongoDB
);

// Tạo model từ schema
const OrderDetail = mongoose.model('OrderDetail', statusSchema);

// Xuất model bằng module.exports
module.exports = OrderDetail;
