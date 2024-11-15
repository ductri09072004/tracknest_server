const mongoose = require('mongoose');
const { Schema } = mongoose;

// Định nghĩa schema cho DeliveryStatus
const statusSchema = new Schema(
  {
    nofiId: { type: String, required: true, unique: true },
    nofiTitle: { type: String, required: true },
    nofiContent: { type: String, required: true },
    nofiType: { type: String, required: true },
    nofiTime: { type: Date, required: true },
    cusId: { type: String, required: true },
  },
  { collection: 'Notification' } // Đảm bảo dùng đúng collection trong MongoDB
);

// Tạo model từ schema
const Notification = mongoose.model('Notification', statusSchema);

// Xuất model bằng module.exports
module.exports = Notification;
