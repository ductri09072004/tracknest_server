const mongoose = require('mongoose');

// Định nghĩa schema cho DeliveryStatus
const statusSchema = new mongoose.Schema(
    {
        Request_ID: { type: String, required: true, unique: true },
        Cus_ID: { type: String, required: true },
        Order_ID: { type: String, required: true },
        Request_Picture: { type: String, required: true },
        Request_Status: { type: String, required: true },
        Request_Date: { type: Date, required: true },
        Request_Type: { type: String, required: true },
        Driver_ID: { type: String},
    },
    { collection: 'Request' } // Đảm bảo dùng đúng collection trong MongoDB
);

// Tạo model từ schema
const Request = mongoose.model('Request', statusSchema);

// Xuất model bằng module.exports
module.exports = Request;
