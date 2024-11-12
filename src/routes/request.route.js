const express = require('express');
const Request = require('../controllers/request.controller.js'); // Giữ require

const router = express.Router();

router.get('/request', async (req, res) => {
  try {
    const questions = await Request.find();
    res.json(questions);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});

router.post('/request', async (req, res) => {
  try {
    const {
      Request_ID,
      Cus_ID,
      Order_ID,
      Request_Picture,
      Request_Status,
      Request_Date,
      Request_Type,
      Driver_ID,
    } = req.body;
    const newMessage = new Request({
      Request_ID,
      Cus_ID,
      Order_ID,
      Request_Picture,
      Request_Status,
      Request_Date,
      Request_Type,
      Driver_ID,
    });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Lỗi khi thêm dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi thêm dữ liệu' });
  }
});

module.exports = router; 
