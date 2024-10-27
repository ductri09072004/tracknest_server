const express = require('express');
const Order = require('../controllers/order.controller.js'); 

const router = express.Router();

router.use(express.json()); 

router.get('/order', async (req, res) => {
  const { status } = req.query; 

  try {
    // Lọc đơn hàng theo Status nếu status được cung cấp
    const orders = await Order.find(status ? { Status_ID: status } : {});  
    res.json(orders);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});

router.get('/ordersearch', async (req, res) => {
  const { orderID } = req.query; 

  try {
    const orders = await Order.find(orderID ? { Order_ID: orderID } : {});  
    res.json(orders);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});

router.post('/order', async (req, res) => {
  try {
    const {
      Order_ID,
      Cus_ID,
      Sender_Address,
      Receiver_Phone,
      Receiver_Name,
      Receiver_Address,
      Order_Type,
      Order_Fragile,
      Order_Note,
      Order_COD,
      Services_ID,
      Order_TotalPrice,
      Payment_ID,
      Status_ID,
      Driver_ID,  
      Order_Date,
      Delivery_Fee,
      Proof_Success,
      Order_Reason
    } = req.body;

    const newOrder = new Order({
      Order_ID,
      Cus_ID,
      Sender_Address,
      Receiver_Phone,
      Receiver_Name,
      Receiver_Address,
      Order_Type,
      Order_Fragile,
      Order_Note,
      Order_COD,
      Services_ID,
      Order_TotalPrice,
      Payment_ID,
      Status_ID,
      Driver_ID,  
      Order_Date,
      Delivery_Fee,
      Proof_Success,
      Order_Reason
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Lỗi khi thêm dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi thêm dữ liệu' });
  }
});

router.put('/order/:id', async (req, res) => {
  try {
    const { id } = req.params; // Lấy mã đơn hàng từ URL
    const { Status_ID } = req.body; // Nhận Status_ID từ body

    if (!id) {
      return res.status(400).json({ error: 'Thiếu mã đơn hàng.' });
    }

    // Tìm và cập nhật đơn hàng theo Order_ID
    const updatedOrder = await Order.findOneAndUpdate(
      { Order_ID: id }, 
      { Status_ID }, 
      { new: true } // Trả về đơn hàng đã được cập nhật
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: 'Không tìm thấy đơn hàng.' });
    }

    res.json(updatedOrder);
  } catch (error) {
    console.error('Lỗi khi cập nhật đơn hàng:', error);
    res.status(500).json({ error: 'Lỗi khi cập nhật đơn hàng.' });
  }
});

module.exports = router; 
