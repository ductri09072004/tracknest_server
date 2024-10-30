const express = require('express');
const Payment = require('../controllers/payment.controller.js'); // Giữ require

const router = express.Router();

router.get('/Payment', async (req, res) => {
  try {
    const questions = await Payment.find();
    res.json(questions);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});

module.exports = router; 
