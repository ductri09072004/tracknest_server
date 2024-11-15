const express = require('express');
const Order = require('../controllers/order.controller.js'); 

const router = express.Router();

router.use(express.json()); 

router.get('/order', async (req, res) => {
  const { status, cusId } = req.query;
  try {
    const filter = {
      ...(status && { orderStatusId: status }),
      ...(cusId && { 'email.cusId': cusId }),
    };

    const orders = await Order.find(filter);
    res.json(orders);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});


router.get('/ordersearch', async (req, res) => {
  const { orderID, cusId } = req.query;

  try {
    // Tạo object lọc theo điều kiện `orderID` và `cus.cusId`
    const filter = {};
    if (orderID) filter.orderId = orderID;
    if (cusId) filter.cusId = cusId;

    const orders = await Order.find(filter);
    res.json(orders);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});

router.post('/order', async (req, res) => {
  try {
    const {
      orderId,
      cusId,
      senderAddress,
      receiverPhone,
      receiverName,
      receiverAddress,
      orderType,
      orderIsFragile,
      orderNote,
      orderCOD,
      dservicesId,
      totalPrice,
      paymentId,
      orderStatusId,
      driverId,
      createdDate,
      deliverPrice,
      proofSuccess,
      reasonFailed,

    } = req.body;

    const newOrder = new Order({
      orderId,
      cusId,
      senderAddress,
      receiverPhone,
      receiverName,
      receiverAddress,
      orderType,
      orderIsFragile,
      orderNote,
      orderCOD,
      dservicesId,
      totalPrice,
      paymentId,
      orderStatusId,
      driverId,
      createdDate,
      deliverPrice,
      proofSuccess,
      reasonFailed,
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
    const { orderStatusId } = req.body; // Nhận Status_ID từ body

    if (!id) {
      return res.status(400).json({ error: 'Thiếu mã đơn hàng.' });
    }

    // Tìm và cập nhật đơn hàng theo Order_ID
    const updatedOrder = await Order.findOneAndUpdate(
      { orderId: id }, 
      { orderStatusId }, 
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
