const express = require('express');
const Service = require('../controllers/service.controller'); // Giữ require

const router = express.Router();

router.get('/Service', async (req, res) => {
  try {
    const questions = await Service.find();
    res.json(questions);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
});

module.exports = router; 
